// // src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css'; // Your CSS file
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';

// ReactDOM.render(
//   <BrowserRouter basename="/resume-app">  {/* Add basename here */}
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/resume-app">
    <App />
  </BrowserRouter>
);
