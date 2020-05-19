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
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <h3 className="navbar-heading">CaptionLol'd 2020 </h3>
               
            </ul>
            
        </div>
    )
}
export default NavBar;

