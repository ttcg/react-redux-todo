import React from 'react';

import logo from '../../logo.svg';
import '../App.css';

import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="App">
          <NavLink to='/home'>Home</NavLink>                  
          <NavLink to='/todo/addnew'>Add New</NavLink>    
        </div>
    )
} 

export default Header;