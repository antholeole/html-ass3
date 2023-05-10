import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Pages } from './contexts/Page';
import { Shopping } from './contexts/Shopping';
import { User } from './contexts/User';
import { Toaster } from './contexts/Toaster';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster.Provider>
        <User.Provider>
          <Pages.Provider>
            <Shopping.Provider>
              <App />
            </Shopping.Provider>
          </Pages.Provider>
        </User.Provider>
      </Toaster.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
