import { useEffect, useState } from 'react';

      const Login = ({ onClose }) => {

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [name, setName] = useState('');

      const [currState, setCurrState] = useState("Login");

      // Désactivé le scroll lorsque le login est activé
      useEffect(() => {
            document.body.style.overflow = 'hidden';

            return () => {
                  document.body.style.overflow = 'auto';
            }
      }, []);

      const handleSubmit = async (e) => {
      e.preventDefault();
      // login logic here
      }

      return (
            <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/40 z-50'>
                  <div className='relative w-full mx-2 max-w-sm p-6 bg-white border border-primary/30 shadow-xl rounded-lg'>

                        {/* Bouton de fermeture */}
                        <button 
                              onClick={onClose}
                              className='absolute top-1 right-2 text-black text-4xl font-semibold cursor-pointer'
                        >
                              &times;
                        </button>

                        <div className='flex flex-col items-center justify-center'>
                              <div className='w-full py-6 text-center'>
                                    <h1 className='text-3xl font-bold'> <span className='text-primary'>{currState}</span></h1>
                                    <p className='font-light'>Enter your credentials to access</p>
                              </div>

                              <form onSubmit={handleSubmit} className='mt-6 w-full text-gray-600'>
                                    {currState === "Sing Up" ? 
                                          <div className='flex flex-col'>
                                                <label>Name</label>
                                                <input
                                                      onChange={(e) => setName(e.target.value)}
                                                      value={name}
                                                      type="text"
                                                      required
                                                      placeholder='Your Name'
                                                      className='border-b-2 border-gray-300 p-2 outline-none mb-6'
                                                />
                                          </div> : <></>
                                    }

                                    <div className='flex flex-col'>
                                          <label>Email</label>
                                          <input
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                                type="email"
                                                required
                                                placeholder='Your email id'
                                                className='border-b-2 border-gray-300 p-2 outline-none mb-6'
                                          />
                                    </div>

                                    <div className='flex flex-col'>
                                          <label>Password</label>
                                          <input
                                                onChange={(e) => setPassword(e.target.value)}
                                                value={password}
                                                type="password"
                                                required
                                                placeholder='Your password'
                                                className='border-b-2 border-gray-300 p-2 outline-none mb-6'
                                          />
                                    </div>

                                    <button type='submit' className='w-full py-2 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all'>
                                          {currState !== "Login" ? "Create account" : "Login"}
                                    </button>
                                    {currState === "Sing Up" 
                                          ? <p className='py-2'>Already have account ? <span className='text-primary cursor-pointer' onClick={() => setCurrState("Login")}>Login here</span></p> 
                                          : <p className='py-2'>Create a new account ? <span className='text-primary cursor-pointer' onClick={() => setCurrState("Sing Up")}>Click here</span></p>
                                    }
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default Login;
