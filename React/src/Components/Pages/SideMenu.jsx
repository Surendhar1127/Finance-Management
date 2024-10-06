import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} aria-current="page">
              <span data-feather="home"></span>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/transactions" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              <span data-feather="file"></span>
              Transactions
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/savings-goal" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              <span data-feather="shopping-cart"></span>
              Savings Goal
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/investment" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              <span data-feather="users"></span>
              Investment
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
