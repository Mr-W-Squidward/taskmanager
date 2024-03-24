// taskcreationform.js

import React, { useState } from 'react';
import './styles.css';

const TaskCreationForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return; // Prevent adding empty tasks
    addTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="task-creation-form">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter task title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter task description"
          ></textarea>
        </div>
        <button type="submit" className="add-btn">Add Task</button>
      </form>
    </div>
  );
};

export default TaskCreationForm;
