import React from 'react';
import './styles.css';

const TaskList = ({ tasks, removeTask }) => {
  const handleRemoveTask = (taskId) => {
    removeTask(taskId);
  };

  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task._id} className="task-item"> {/* Use _id instead of id */}
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
          <button onClick={() => handleRemoveTask(task._id)} className="remove-btn">Remove</button> {/* Use _id instead of id */}
        </div>
      ))}
    </div>
  );
};

export default TaskList;