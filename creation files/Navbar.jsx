import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav id='nav'>
                <li id='one'>Med+</li>
                <ul id='ull'>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/' >Login</Link></li>
                </ul>
            </nav>
        </>

    )
}
export default Navbar;