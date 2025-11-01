import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useTaskContext } from '../contexts/TaskContext';

const EditTaskForm = ({ task }) => {

      const { handleUpdateTask, setEditingTask } = useTaskContext();

      const [title, setTitle] = useState(task.title || '');
      const [description, setDescription] = useState(task.description || '');

      // Désactivé le scroll lorsque l'Édit est activé
      useEffect(() => {
            document.body.style.overflow = 'hidden';

            return () => {
                  document.body.style.overflow = 'auto';
            }
      }, []);
    
      const handleSubmit = (e) => {

            e.preventDefault();
            const updatedTask = { ...task, title, description };

            handleUpdateTask(updatedTask);

            toast.info("Task updated successfully!");
      };

      return (
            <div className='fixed inset-0 z-50 bg-black/40 bg-opacity-50 flex items-center justify-center'>
                  <form onSubmit={handleSubmit} className=" bg-white p-4 rounded shadow mb-4 mx-2">
                        <h2 className="text-lg font-bold mb-2">Edit Task</h2>
                        <input
                              className="w-full mb-2 border p-2 rounded"
                              type="text"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              required
                        />
                        <textarea
                              className="w-full mb-2 border p-2 rounded"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              required
                        ></textarea>
                        <div className="flex gap-2">
                              <button type="submit" className="bg-primary/90 text-white px-4 py-2 rounded hover:bg-primary cursor-pointer">
                                    Save
                              </button>
                              <button type="button" onClick={() => setEditingTask(null)} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 cursor-pointer">
                                    Cancel
                              </button>
                        </div>
                   </form>
            </div>
      )
}

export default EditTaskForm;
