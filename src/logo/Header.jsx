// import React, { useState } from 'react';
import { UserContext } from '../components/add/form/provider/UserProvider.jsx';
import { Link , useLocation, useNavigate } from 'react-router-dom'
import picture from '../assests/imges.jpg'
import { useContext } from 'react';
import './Header.css';

const Header = props => {
 const location = useLocation()
 const navigate = useNavigate();
 const userContext = useContext(UserContext);

  return (
    <header >
      <div className="Header">
        <div className="left">
          <h1>
            <img src="./res.png" alt="" />
            Frying Nemo
          </h1>
        </div>
        <div className="right">

          <nav>
            <Link
             to='/add'
             className={location.pathname === '/add' ? 'current' : ''}
             >Add</Link >
            <Link
             to='/view'
             className={location.pathname.includes('/view') ? 'current' : ''}
             >View</Link >
          </nav>
        </div>
        {
          userContext.user &&
          <span className="user-badge">
            <img src={picture} alt="user logo" width={30} height={30} />
            {userContext.user.fullName}
            <button 
            onClick={() => {
              userContext.setUser(null)
              navigate('/login')
            } }
            >Logout</button>
          </span>
        }
     
      </div>

    </header>
  );
};

export default Header;
