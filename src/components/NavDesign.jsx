import React from "react";
import "./NavDesign.css";
import logoo from '../image/logooo.png';
import { Link } from "react-router-dom";
const NavDesign = () => {
    return (
        <>
            {/* <div className="entire"> */}
            {/* <nav>
                <ul>
                <li className="revv"><img src="https://cdn-icons-png.freepik.com/256/9387/9387315.png?ga=GA1.1.1926509971.1706538481" alt="med logo" /></li>
                <li className="tess">Mission-Dhruva</li>
                <li><img src="https://cdn-icons-png.freepik.com/256/9387/9387315.png?ga=GA1.1.1926509971.1706538481" alt="med logo" /></li>
                </ul>
            </nav> */}

            {/* <text className="subs"> Democratising India's Health Sector</text> */}
            {/* </div> */}
            {/* <a class="links selected" href="#"><img src={logoo} alt="dsdvd"/> </a> */}
            <div className="navb">
                <div class="left-links">
                    <li class="links selected onepp" >Mission-Dhruva</li>
                </div>
                <div class="right-links">
                    <li class="links" > <Link to='/' >Home</Link></li>
                    <li class="links" > <Link to='/Login' >Login</Link></li>
                    <li class="links" > <Link to='/Register' >Register</Link></li>
                    <li class="links" > About Us</li>
                </div>

            </div>
        </>
    )
}
export default NavDesign;
