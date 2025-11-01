import React from 'react';
import Task from './Task';
import { useTaskContext } from '../contexts/TaskContext';

const Tasks = ({ onDelete, menu }) => {

  const { tasks } = useTaskContext();

  const taskDisplay = tasks.filter((task) => {
    if (menu === "All") return true;
    if (menu === "To Do") return !task.completed;
    if (menu === "Completed") return task.completed;
    return true;
  });
  

  return (
    <div className='mt-4'>
      {taskDisplay.length === 0 ? (
        <p className='text-center text-gray-500 text-sm'>No Tasks To Show</p>
      ) : (
        taskDisplay.map((task, index) => (
          <Task 
            key={index} 
            task={task} 
          />
        ))
      )}
    </div>
  )
}

export default Tasks;
