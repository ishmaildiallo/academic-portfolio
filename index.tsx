import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Redirect legacy HashRouter URLs (/#/publications) to real paths.
const { hash } = window.location;
if (hash.startsWith('#/')) {
  window.history.replaceState(null, '', hash.slice(1) + window.location.search);
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);