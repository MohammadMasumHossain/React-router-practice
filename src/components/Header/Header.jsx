import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>This is from header</h2>
            
           <nav>
           <NavLink to="/">Home</NavLink>
            <NavLink to="/mobiles">Mobile</NavLink>
            <NavLink to="/laptop">Laptop</NavLink>
            <NavLink to="/user">User</NavLink>
           </nav>
        </div>
    );
};

export default Header;