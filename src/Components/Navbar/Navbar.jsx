import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';



const NavBar=()=> {
    return (
        <div className="navbar">
         
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
               
                <li>
                    <Link to="/posts">AI Exploit </Link>
                </li>
                <li>
                    <Link to="/users">Exploit Engineer</Link>
                </li>
                <h3 className="navbar-heading">Monitoring Malicious AI Applications (MMAA) </h3>


                {/* <h3 className="navbar-heading">loiasmfd aklindmf lim alskfm  (MMAA) </h3> */}
              
               
            </ul>
            
        </div>
    )
}
export default NavBar;

