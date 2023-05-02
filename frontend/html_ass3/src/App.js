import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Create from './pages/Create';
import Read from './pages/Read';
import Update from './pages/Update';
import Delete from './pages/Delete';
import Credits from './pages/Credits';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='create' element={<Create />} />
          <Route path='read' element={<Read />} />
          <Route path='update' element={<Update />} />
          <Route path='delete' element={<Delete />} />
          <Route path='credits' element={<Credits />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);