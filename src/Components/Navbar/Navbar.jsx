import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';



const NavBar=()=> {
    return (
        <div className="navbar">
            {/* <h3 className="copywrite">DJS productions</h3> */}
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {/* <li>
                    <Link to="/customers">Customers</Link>
                </li> */}
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

