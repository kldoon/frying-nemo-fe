import React from 'react';
import './header.css';

const Header = props => {
  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>
          Frying Nemo
        </h1>
      </div>
      <div className="right">
        <button  className={props.currentPage === 'add' ? 'current' : ''} onClick={() => props.onNavigate('add')}>Add</button>
        <button className={props.currentPage === 'view' ? 'current' : ''} onClick={() => props.onNavigate('view')}>View</button>
      </div>
    </header>
  );
};

export default Header;