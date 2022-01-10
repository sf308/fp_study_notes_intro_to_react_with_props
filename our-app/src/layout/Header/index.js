import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/songs" activeClassName="current">Songs</NavLink>
        </nav>
    );
}

export default Header;