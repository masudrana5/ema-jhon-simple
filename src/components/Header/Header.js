import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
   return (
      <nav className='header'>
         <img src={logo} alt="logo" />
         <div>
            <Link to="/">Shop</Link>
            <Link to="/order">Order</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/about">About</Link>
         </div>
      </nav>
   );
};

export default Header;