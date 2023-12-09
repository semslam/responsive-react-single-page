import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>User Management App</h1>
      <hr />
      <div >
        <NavLink to="/" activeClassName="active" exact>
          Users List
        </NavLink>
        <NavLink to="/add" activeClassName="active">
          Add User
        </NavLink>
      </div>
    </header>
  );
};

export default Header;