import React from 'react';
import './Navbar.css';
import person from "../images/person.jpg";

const Navbar = () => {
    return (
        <div className="navbar">
           <div className="left-navbar">
                <h1>FundingX</h1>
                <div className="search-box">
                    <input type='text' placeholder='search' />
                    
                    <button className="btn"><i class="fa fa-search"></i></button>
                </div>
           </div>
           <div className="right-navbar">
               <span><i class="fa fa-bell"></i></span>
               <div className="notification"></div>
               <h2>vinayak</h2>
               <div>
                   <img src={person} alt="person"/>
               </div>
           </div>
        </div>
    )
}

export default Navbar;
