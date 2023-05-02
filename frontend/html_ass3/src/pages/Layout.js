import { Outlet, Link } from "react-router-dom";
import React from 'react';
import './styles/layout.css';

const Layout = () => {
  return (
    <>
      <nav className="navigation">
        <div className="navigation-menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/create">Create</Link>
                </li>
                <li>
                    <Link to="/read">Read</Link>
                </li>
                <li>
                    <Link to="/update">Update</Link>
                </li>
                <li>
                    <Link to="/delete">Delete</Link>
                </li>
            </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;