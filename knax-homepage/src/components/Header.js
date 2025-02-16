import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import './Header.css'; // Import the CSS file for styles

const Header = ({ isDarkMode, setIsDarkMode }) => {
    return (
        <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
            <h1 className="logo">Knax</h1>
            <nav>
                <ul className="nav-links">
                    <li><a href="#products">Products</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="header-icons">
                <button onClick={() => setIsDarkMode(!isDarkMode)} className="mode-toggle">
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                <FaShoppingCart className="icon" />
                <FaUser className="icon" />
            </div>
        </header>
    );
};

export default Header; 