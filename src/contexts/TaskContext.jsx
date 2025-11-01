import { createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';

const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
      const data = [
            {
                  "id": 1,
                  "title": "Buy groceries",
                  "description": "Get milk, bread, and eggs from the supermarket",
                  "date": "2025-06-17",
                  "completed": false
            },
            {
                  "id": 2,
                  "title": "Meeting with team",
                  "description": "Discuss the React project and assign tasks",
                  "date": "2025-06-18",
                  "completed": true
            },
            {
                  "id": 3,
                  "title": "Study JavaScript",
                  "description": "Finish asynchronous JavaScript and fetch API section",
                  "date": "2025-06-19",
                  "completed": false
            }
      ];

      const [tasks, setTasks] = useState(data);
      const [editingTask, setEditingTask] = useState(null);
      const [deletingTask, setDeletingTask] = useState(null);

      const [showAddTask, setShowAddTask] = useState(false);

      const handleShowAddTask = () => {
            setShowAddTask((prev) => !prev);
      }
      

      //Fonction pour ajouter une nouvelle tâche
      const handleAddTask = async (task) => {
            // const res = await fetch('http://localhost:5000/tasks',
            // {
            //       method: 'POST',
            //       headers:{
            //             'Content-type': 'application/json'
            //       },
            //       body: JSON.stringify(task),
            // }
            // )
            // const data = await res.json();
            // setTasks([...tasks, data]);
      
            const id = Math.floor(Math.random() * 10000) + 1;
            const newTask = { id, ...task };

            console.log("→ Nouvelle tâche :", newTask);
            setTasks(prevTasks => [...prevTasks, newTask]);
      }

      // Fonction pour éditer la tâche
      const handleUpdateTask = (updatedTask) => {
            setTasks(prev =>
                  prev.map(task => (task.id === updatedTask.id ? updatedTask : task))
            );
            setEditingTask(null);
      };

      // Fonction pour supprimer une tâche
      const deleteTask =  (id) => {
            // await fetch(`http://localhost:5000/tasks/${id}`, {
            //       method: 'DELETE',
            // })
      
            setTasks(tasks.filter((task) => task.id !== id));
            setEditingTask(null);

            if (deletingTask && deletingTask.id === id) {
                  setDeletingTask(null);
            }
            
            toast.error("Task deleted!");
      }

      const handleDeleteRequest = (task) => {
            setDeletingTask(task);
      }

      // Update completed task
      const toggleCompleted = (id) => {

            const taskToToggle = [...tasks];

            const updTask = { ...taskToToggle, 
                  completed: !taskToToggle.completed 
            }

            setTasks(
                  tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
            );

            toast.info("Task update Completed! Successfull!");
      }

      return (
            <TaskContext.Provider
                  value={{
                        tasks,
                        editingTask,
                        deletingTask,
                        showAddTask,
                        setShowAddTask,
                        handleShowAddTask,
                        handleAddTask,
                        handleUpdateTask,
                        deleteTask,
                        handleDeleteRequest,
                        toggleCompleted,
                        setEditingTask,
                        setDeletingTask,
                  }}
            >
                  {children}
            </TaskContext.Provider>
      );
}

export const useTaskContext = () => useContext(TaskContext);