const API_URL = 'http://localhost:3001/api/tasks';

export const getAllTasks = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }
  return await response.json();
};
