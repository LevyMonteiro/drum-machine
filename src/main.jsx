import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import ControllerProvider from './context/ControllerContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ControllerProvider>
      <App />
    </ControllerProvider>
  </React.StrictMode>,
);
