import todoImg from '../assets/todo.png';
import light_mode from '../assets/light_mode.png';
import dark_mode from '../assets/dark_mode.png';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/theme.context';


const Navbar = ({ onLogin }) => {

      const { darkMode, toggleDarkMode } = useTheme();

      const navigate = useNavigate();

      return (
            <div className='flex items-center justify-between mx-4 py-4 sm:mx-8 md:mx-16 xl:mx-32'>
                  <div className='flex items-center justify-center'>
                        <p 
                              onClick={() => navigate('/')} 
                              className='flex items-center justify-center text-2xl cursor-pointer '
                        >
                              <img src={todoImg} alt="Logo" className='w-8' />
                              <span className='text-black dark:text-white'>TodoApp</span>
                        </p>
                  </div>
                  <div className='flex items-center gap-2 md:gap-6'>
                        <button onClick={onLogin} className=' border-none px-6 cursor-pointer py-1.5 bg-primary/90 hover:bg-primary transition text-white rounded-full'>Login</button>
                        <button
                                    onClick={toggleDarkMode}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 overflow-hidden cursor-pointer"
                              >
                              <img
                                    src={darkMode ? light_mode : dark_mode}
                                    alt={darkMode ? "Mode clair" : "Mode sombre"}
                                    className="w-5 h-5"
                              />
                        </button>

                  </div>
            </div>
      )
}

export default Navbar;
