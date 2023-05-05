import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Pages } from './contexts/Page';
import { Shopping } from './contexts/Shopping';
import { User } from './contexts/User';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <User.Provider>
      <Pages.Provider>
        <Shopping.Provider>
          <App />
        </Shopping.Provider>
      </Pages.Provider>
    </User.Provider>
  </React.StrictMode>
);
