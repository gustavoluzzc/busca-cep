import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.addEventListener("keypress", function(e) {
  if(e.key === "Enter") {
    
    const btn = document.querySelector(".button-search");

    btn.click();

    }

});