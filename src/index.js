import React from 'react';
import ReactDOM from 'react-dom/client';

// css
import './index.css';

// app
import App from './App';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// react-router-dom
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);