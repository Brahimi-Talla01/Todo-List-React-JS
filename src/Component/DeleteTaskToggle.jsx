import React from 'react';
import { FaExclamationTriangle } from "react-icons/fa";
import { useTaskContext } from '../contexts/TaskContext';


const DeleteTaskToggle = () => {

      const { deletingTask, deleteTask, setDeletingTask } = useTaskContext();

      return (
            <div className='fixed inset-0 z-50 bg-black/40 bg-opacity-50 flex items-center justify-center'>
                  <div className="flex flex-col p-6 items-center justify-center bg-white rounded shadow mb-4 mx-2">
                        <p className="text-red-600 flex items-center gap-2">
                              <FaExclamationTriangle className="text-xl" />
                        </p>
                        <h1 className='text-xl text-black py-2 font-semibold'>Delete Task</h1>
                        <p>You're going to delete one Task</p>
                        <div className='flex gap-4 px-4 py-2 items-center justify-between'>
                              <button 
                                    type="button" 
                                    onClick={() => setDeletingTask(null)} 
                                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
                              >
                                    Cancel
                              </button>
                              <button 
                                    type='button'
                                    onClick={() => deleteTask(deletingTask.id)}
                                    className='px-4 py-2 text-white cursor-pointer bg-red-500 transition-all hover:bg-red-600 rounded'
                              >
                                    Yes, Delete!
                              </button>
                        </div>
                  </div>
            </div>
      )
}

export default DeleteTaskToggle;
