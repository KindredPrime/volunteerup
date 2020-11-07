import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import VolunteerContext from '../VolunteerContext';
import './Nav.css';

class Nav extends Component {
  static contextType = VolunteerContext;

  handleLogout = (e) => {
    e.preventDefault();

    const { logoutUser } = this.context;
    logoutUser();
  }

  render() {
    const { user } = this.context;

    return (
      <nav className="Nav">
        <NavLink exact to="/">Home</NavLink>
        {user
          ? <>
            <NavLink to="/user">Account</NavLink>
            <Link to="" onClick={this.handleLogout}>Logout</Link>
          </>
          : <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </>}
      </nav>
    );
  }
}

export default Nav;