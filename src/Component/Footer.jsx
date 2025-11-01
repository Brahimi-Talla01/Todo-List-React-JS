import { useNavigate } from 'react-router-dom';
import todoImg from '../assets/todo.png';

const Footer = () => {

      const navigate = useNavigate();

      return (
            <div className='w-full bg-black mt-6'>
                  <div className='flex flex-col md:flex-row items-center text-center md:text-left md:justify-between gap-4 mx-4 py-6 sm:mx-8 md:mx-16 xl:mx-32'>
                  
                        {/* Logo */}
                        <div className='flex items-center justify-center'>
                              <p onClick={() => navigate('/')} className='flex items-center text-white text-2xl cursor-pointer'>
                                    <img src={todoImg} alt="Logo" className='w-8 mr-2' />
                                    TodoApp
                              </p>
                        </div>

                        {/* Text content */}
                        <div className='text-center'>
                              <h2 className='text-white font-semibold'>Copyright 2025 &copy; TodoApp</h2>
                              <p className='text-gray-300 text-sm'>This application and its content are protected by copyright laws.</p>
                        </div>

                        <div>

                        </div>

                  </div>
            </div>
      );
};

export default Footer;

