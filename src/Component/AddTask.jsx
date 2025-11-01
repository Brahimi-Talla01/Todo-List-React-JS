import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useTaskContext } from '../contexts/TaskContext';


const AddTask = () => {

      const { handleAddTask, setShowAddTask } = useTaskContext();

      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const [date, setDate] = useState('');
      const [isCompleted, setIsCompleted] = useState(false);
    
      const onSubmit = (e) => {
            e.preventDefault();
      
            if (!title) {
                  alert('Please add a task');
                  return;
            }
            
            console.log("-> Soumission en cours");
            handleAddTask({ title, description, date, isCompleted });

            toast.success("Task added successfully!");
      
            setTitle('');
            setDescription('');
            setDate('');
            setIsCompleted(false);
            setShowAddTask(false);
      }

      return (
            <div className="flex justify-center px-4">
                  <form
                        onSubmit={onSubmit}
                        className="w-full max-w-3xl bg-white shadow-md border border-gray-300 rounded-xl px-6 py-8 space-y-6 mt-8"
                  >
                        {/* Title */}
                        <div className="flex flex-col">
                              <label className="mb-2 text-sm font-medium text-gray-700">Title:</label>
                              <input
                                    className="border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-1 focus:black"
                                    type="text"
                                    placeholder="Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                              />
                        </div>

                        {/* Description */}
                        <div className="flex flex-col">
                              <label className="mb-2 text-sm font-medium text-gray-700">Description:</label>
                              <input
                                    className="border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-1 focus:black"
                                    type="text"
                                    placeholder="Your description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                              />
                        </div>

                        {/* Date */}
                        <div className="flex flex-col">
                              <label className="mb-2 text-sm font-medium text-gray-700">Date:</label>
                              <input
                                    className="border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-1 focus:black"
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                              />
                     </div>

                        {/* Completed */}
                        <div className="flex items-center gap-2">
                              <input
                                    type="checkbox"
                                    checked={isCompleted}
                                    value={isCompleted}
                                    onChange={(e) => setIsCompleted(e.currentTarget.checked)}
                                    className="accent-primary w-4 h-4"
                              />
                              <label className="text-sm font-medium text-gray-700">Completed</label>
                        </div>

                        {/* Submit Button */}
                        <button
                              type="submit"
                              className="w-full bg-black/80 text-white py-2 rounded-md font-semibold hover:bg-black/100 transition-all cursor-pointer"
                        >
                              Save Task
                        </button>
                  </form>
            </div>
      )
}

export default AddTask;
