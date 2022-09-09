import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="logo" className="logo nav-common">
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
<nav id="nav">
  <ul className="nav-common">
    <li>
      <Link to="/">
        <p>
         <span id="logo">Dogs Market-Ke</span> 
        </p>
      </Link>
    </li>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
   
    <li>
      <NavLink to="/doglist">Buy & Sell Dogs </NavLink>
    </li>
    <li>
      <NavLink to="/services">Services </NavLink>
    </li>
    
    <li>
      <NavLink to="#">SignUp/LogIn </NavLink>
    </li>
  </ul>
</nav>
    </div>
  );
};

export default Navbar;
