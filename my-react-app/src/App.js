import React from 'react';
import './styles.css';
import Dashboard from './dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Manager</h1>
      </header>
      <main>
        {/* Render the Dashboard component */}
        <Dashboard />
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
