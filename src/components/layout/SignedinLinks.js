import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../reduxs/actions/ActionsAuth';

function SignedinLinks({ onLogOut, profile }) {
  const { initials } = profile;
  return (
    <ul className="right">
      <li>
        <NavLink to="/create"> New Project </NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={onLogOut}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {initials}
        </NavLink>
      </li>
    </ul>
  );
}

const mapStateToProps = state => ({
  profile: state.firebaseState.profile,
});

const mapDispatchToProps = dispatch => ({
  onLogOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignedinLinks);
