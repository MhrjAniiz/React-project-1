import React from 'react';
import logo from '../../logo.svg';
import './navbar.scss';

const NavBar = () =>{
    return(
        <nav className="navbar">  
            <img src={logo} alt="logo " />
            <ul className='nav-links'>
                <li>
                    <a href="www.google.com" className="nav-link">home</a>
                </li>
                <li>
                    <a href="www.google.com" className="nav-link">contacts</a>
                </li>
                <li>
                    <a href="www.google.com" className="nav-link active">about us</a>
                </li>
            </ul>
         </nav>
    );
}

export default NavBar;