import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Shopping } from './contexts/Shopping';
import { User } from './contexts/User';
import { Toaster } from './contexts/Toaster';
import { BrowserRouter } from 'react-router-dom';
import { Modal } from './contexts/Modal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster.Provider>
        <User.Provider>
          <Modal.Provider>
            <Shopping.Provider>
              <App />
            </Shopping.Provider>
          </Modal.Provider>
        </User.Provider>
      </Toaster.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
