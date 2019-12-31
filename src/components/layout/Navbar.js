import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignedinLinks from './SignedinLinks';
import SignedoutLinks from './SignedoutLinks';

function Navbar({ auth, profile }) {
  const { uid } = auth;
  const signInOrOut = uid ? <SignedinLinks /> : <SignedoutLinks />;
  return (
    <nav className="nav wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          postITon
        </Link>
        {signInOrOut}
      </div>
    </nav>
  );
}

const mapStateToProps = state => ({
  auth: state.firebaseState.auth,
});

export default connect(mapStateToProps)(Navbar);
