import React from 'react';

import { NavLink } from 'react-router-dom';

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default Navbar;