   // src/index.js
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App';
   import './styles.css';

   // Create a root for the application
   const root = ReactDOM.createRoot(document.getElementById('root'));

   // Render the App component
   root.render(
       <React.StrictMode>
           <App />
       </React.StrictMode>
   );