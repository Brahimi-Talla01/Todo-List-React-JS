import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import Tasks from './Tasks';
import EditTaskForm from './EditTaskForm';
import DeleteTaskToggle from './DeleteTaskToggle';
import { useTaskContext } from '../contexts/TaskContext';

const TodoList = () => {

      const category = ["All", "To Do", "Completed"];
      const [menu, setMenu] = useState("All");

      const { tasks, deletingTask, editingTask } = useTaskContext();

      return (
            <div className="w-full min-h-100 flex justify-center mt-8">
                  <div className="flex flex-col w-full max-w-4xl">
                        <div className='w-full px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
                              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">My Tasks</p>

                              <div className="flex gap-2 relative">
                                    {category.map((item) => (
                                          <div key={item} className="relative">
                                                <button
                                                      onClick={() => setMenu(item)}
                                                      className={`relative px-4 py-1 text-sm shadow cursor-pointer font-medium rounded transition duration-300 ${
                                                            menu === item
                                                            ? 'text-white z-10'
                                                            : 'text-gray-600 hover:text-gray-900 bg-white dark:bg-gray-300'
                                                      }`}
                                                >
                                                      {item}
                                                      {menu === item && (
                                                            <motion.div
                                                                  layoutId="underline"
                                                                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                                                  className="absolute inset-0 bg-primary rounded -z-10"
                                                            />
                                                      )}
                                                </button>
                                          </div>
                                    ))}
                              </div>
                        </div>
                        
                        <div className='min-h-110 mx-4'>
                              {/* Task component */}
                              {
                                    tasks.length > 0 ? 
                                    (<Tasks 
                                          menu={menu}
                                    />
                                    ) : (
                                          'No Tasks To Show'
                                    )
                              }

                              {/* Edit Task */}
                              {editingTask && (
                                    <EditTaskForm
                                          task={editingTask}
                                    />
                              )}

                              {/* Delete Task Toggle */}
                              {deletingTask && (
                                    <DeleteTaskToggle />
                              )}
                        </div>
                  </div>
            </div>
      );
};

export default TodoList;
