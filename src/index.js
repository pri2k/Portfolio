import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom'; 

const redirectPath = sessionStorage.redirect;
delete sessionStorage.redirect;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Portfolio"> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

if (redirectPath) {
  window.history.replaceState(null, "", redirectPath);
}

reportWebVitals();
