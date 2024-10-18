// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Your CSS file
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter basename="/resume-app">  {/* Add basename here */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
