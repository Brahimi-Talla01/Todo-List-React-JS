import React from 'react';
import { useTaskContext } from '../contexts/TaskContext';

const Header = ({ onAdd, showAdd }) => {

      const { handleShowAddTask, showAddTask } = useTaskContext();


      return (
            <div className='flex justify-center mt-8 px-4'>
                  <div className=' w-full max-w-4xl text-center space-y-6'>
                        <p className='relative z-10 text-sm text-black dark:text-white md:text-2xl xl:text-4xl font-semibold'>
                              Welcome to TodoApp! Organize your Tasks with ease and Stay focused On what matters most.
                        </p>

                        <button
                              onClick={handleShowAddTask} 
                              className='bg-primary/90 hover:bg-primary text-white px-4 py-2 rounded shadow-md transition cursor-pointer'
                        >
                              {showAddTask ? 'Close' : 'Add New Task'}
                        </button>
  
                  </div>
            </div>
      )
}

export default Header;
