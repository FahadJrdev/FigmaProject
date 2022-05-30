import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <aside className="sidebar">
      <div className="sidebar_wrapper">
        <div className="sidebar_component">
          <ul className="header-menu">
            <Link to='/'>Home</Link>
            <Link to='/games'>Games</Link>
            <Link to ='/sportsbook'>Sportsbook</Link>
            <Link to='/bonuses'>Bonuses</Link>
            <Link to='/tournaments'>Tournaments</Link>
            <Link to='/news'>News</Link>
            <Link to='/loyalty'>Loyalty</Link>
            <Link to='/rules'>Rules</Link>
            <Link to='/FAQ'>FAQ</Link>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Navbar;
