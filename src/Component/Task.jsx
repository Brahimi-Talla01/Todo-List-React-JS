import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useTaskContext } from "../contexts/TaskContext";

const Task = ({ task  }) => {

      const [showFullDescription, setShowFullDescription] = useState(false);
      const { handleDeleteRequest, toggleCompleted, setEditingTask } = useTaskContext();

      const toggleDescription = () => {
            setShowFullDescription(prev => !prev);
      };


      const words = task.description.split(' ');
      const showTruncated = words.length > 7;
      const truncatedText = words.slice(0, 7).join(' ');

      return ( 
            <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-black rounded shadow mb-3">

                  {/* Checkbox */}
                  <div className="flex items-start">
                        <input 
                              type="checkbox" 
                              checked={task.completed} 
                              onChange={() => toggleCompleted(task.id)} 
                              className="mr-3 mt-1 cursor-pointer"
                        />
                  </div>

                  {/* Infos tâche */}
                  <div className="flex-1 mr-4">
                        <h3 className="font-semibold text-black dark:text-white text-lg">{task.title}</h3>

                        <p className="flex text-sm text-gray-600 dark:text-gray-300 flex-wrap">
                              {showFullDescription || !showTruncated
                                    ? task.description
                                    : truncatedText + '...'}
                              
                              {showTruncated && (
                                    <button
                                          onClick={toggleDescription}
                                          className="ml-2 text-blue-600 underline text-xs hover:text-blue-800 cursor-pointer"
                                    >
                                          {showFullDescription ? 'See less' : 'See more'}
                                    </button>
                              )}
                        </p>

                        <p className="text-xs text-gray-400 mt-1">Date: {task.date}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 text-xl">
                        <button onClick={() => setEditingTask(task)} className="text-black dark:text-gray-300 hover:text-primary cursor-pointer">
                              <FaEdit />
                        </button>
                        <button onClick={() => handleDeleteRequest(task)} className="text-black dark:text-gray-300 hover:text-red-600 cursor-pointer">
                              <FaTrash />
                        </button>
                  </div>

            </div>
      );
};

export default Task;
