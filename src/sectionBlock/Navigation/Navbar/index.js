import React from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { VscChevronDown } from "react-icons/vsc";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { HandShake, Project, Revenue, Expense, Report, Configuration, Help } from '../../../component/icon/icon';
function Navbar() {
  const location = useLocation();
  const getActiveColor = (activeColor) => {
    if(location.pathname===activeColor){
      return 'active';
    }
  }
  return (
    <aside className="sidebar">
      <div className="logo">
        <Link to="/Dashboard">
          <img className="logo-img" src="img/navbar-icon/logo.png" alt="MGM Innova Group" />
        </Link>
        <div className="arena">
          <img className="country" src="img/navbar-icon/us.png" alt="country" />
          <p>US</p>
          <VscChevronDown />
        </div>
      </div>
      <div className="profile-notification">
        <div className="profile">
          <Link to="/Profile">
            <img src="img/navbar-icon/profile.svg" alt="profile" />
          </Link>
          <div className="profile-info">
            <p className="name">Andrew</p>
            <p className="session">My Profile</p>
            <p className="session">close session</p>
          </div>
        </div>
        <div className="notification">
          <Link to="/Notification">
            <img src="img/navbar-icon/bell.svg" alt="notification" />
          </Link>
        </div>
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-component">
          <ul className="header-menu">
            <Link className={`header-menu-item ${getActiveColor('/Dashboard')}`} to='/Dashboard'><MdOutlineDashboardCustomize /><p>Dashboard</p></Link>
            <Link className={`header-menu-item ${getActiveColor('/Investors')}`} to='/Investors'><HandShake /><p>Investors</p></Link>
            <Link className={`header-menu-item ${getActiveColor('/Projects')}`} to='/Projects'><Project /><p>Projects</p></Link>
            <Link className={`header-menu-item ${getActiveColor('/Revenues')}`} to='/Revenues'><Revenue /><p>Revenues</p></Link>
            <Link className={`header-menu-item ${getActiveColor('/Expenses')}`} to='/Expenses'><Expense /><p>Expenses</p></Link>
            <Link className={`header-menu-item ${getActiveColor('/Reports')}`} to='/Reports'><Report /><p>Reports</p></Link>
            <Link className={`header-menu-item ${getActiveColor('/Configuration')}`} to='/Configuration'><Configuration /><p>Configuration</p></Link>
            <Link className={`header-menu-item ${getActiveColor('/Help')}`} to='/Help'><Help /><p>Help</p></Link>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Navbar;
