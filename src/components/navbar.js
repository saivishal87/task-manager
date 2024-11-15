import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropDown';
import './navbar.css';

function Navbar({ onFilterSelect }) {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Task Manager</div>
            <div className="navbar-actions">
                <Link to="/create-task">
                    <button className="navbar-button">New Task</button>
                </Link>
                <div className="filter-container">
                    <Dropdown onSelect={onFilterSelect} /> 
                </div>
            </div>
        </nav>
    );
}

export default Navbar;