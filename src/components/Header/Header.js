import React from 'react';
import './Header.css';
import logo from './logo.png';
const Header = () => {
    return (
        <div>
            <div className='logo'>
            <img src={logo} alt=""/>
        </div><header>
        <nav className='nav-div'>
          <a href="/shop">Shop</a>
          <a href="/review">Order Review</a>
          <a href="/inventory">Manage Inventory</a>
        </nav>
        <div className='search'>
          <input type="search" name="" id="" placeholder="Type here to search"/>
        </div>
      </header>
        </div>
    );
};

export default Header;