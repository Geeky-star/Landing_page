import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component{
    render(){
        return(
        <div className = "menu-toggle">
        <nav>
            <ul>
                <li><a href="#a" class="active">Community Page</a></li>
                <li><a href="#b">Home</a></li>
                <li><a href="#c">Services</a></li>
                <li><a href="#d">Team</a></li>
                <li><a href="#e">About</a></li>
                <li><a href="#f">Contact</a></li>
            </ul>
        </nav>
        <div class="clearfix"></div>
        </div>
    );
}
}

export default Navbar;