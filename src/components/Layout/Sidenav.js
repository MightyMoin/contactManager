import React from 'react';
import '../css/sidenav.css';
import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <div className="nav">
      <div className="nav-elem text-center p-3">
        <Link to="/">
          <i className="fas fa-address-card text-danger mt-4 mb-4">
            <p className="nav-heading">Contacts</p>
          </i>
        </Link>
        <Link to="/contacts/add">
          <i className="fas fa-user-plus text-danger mt-4 mb-4">
          <p className="nav-heading">Add </p>
          </i>
        </Link>
        <Link to="/about">
          <i className="fas fa-question text-danger mt-4 mb-4">
          <p className="nav-heading">About</p>
          </i>
        </Link>
      </div>
    </div>
  );
}

export default Sidenav;
