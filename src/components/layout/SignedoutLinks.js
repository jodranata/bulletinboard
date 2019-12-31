import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SignedoutLinks() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup"> Sign Up </NavLink>
      </li>
      <li>
        <NavLink to="/signin"> Log In </NavLink>
      </li>
    </ul>
  );
}
