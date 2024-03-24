import React, { useState, useEffect } from 'react';
import TaskList from './tasklist';
import TaskCreationForm from './taskcreationform';
import './styles.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks(); 
  }, []);

  const fetchTasks = () => {
    fetch('http://localhost:5000/tasks')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        return response.json();
      })
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  };

  const addTask = (newTask) => {
    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add task');
        }
        fetchTasks(); 
      })
      .catch(error => console.error('Error adding task:', error));
  };

  const removeTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to remove task');
        }
        setTasks(tasks.filter(task => task._id !== id)); 
      })
      .catch(error => console.error('Error removing task:', error));
  };  

  return (
    <div className="dashboard">
      <h2>Task List</h2>
      <TaskList tasks={tasks} removeTask={removeTask} />
      <TaskCreationForm addTask={addTask} />
    </div>
  );
};

export default Dashboard;
