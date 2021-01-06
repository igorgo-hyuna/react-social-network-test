import React from 'react';
import {NavLink} from "react-router-dom";

import './navbar.css';


const Navbar = () => {
    return(
        <nav className="nav">
            <ul>
                <li><NavLink to="/profile" className="nav__item">Profile</NavLink></li>
                <li><NavLink to="/dialogs" className="nav__item">Messages</NavLink></li>
                <li><NavLink to="/news" className="nav__item">News</NavLink></li>
                <li><NavLink to="/music" className="nav__item">Music</NavLink></li>
                <li><NavLink to="/users" className="nav__item">Find users</NavLink></li>
                <li><NavLink to="/settings" className="nav__item">Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
