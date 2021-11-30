import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import TaskList from './components/TaskList';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TaskList />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
