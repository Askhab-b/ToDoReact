import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const item = {
  name: "john",
  age: 20,
  salary: 1000
}

const superMan = {
  ...item,
  age: 21
}