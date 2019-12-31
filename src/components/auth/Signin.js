import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../reduxs/actions/ActionsAuth';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = e =>
    this.setState({
      [e.target.id]: e.target.value,
    });

  handleSubmit = e => {
    e.preventDefault();
    const { onSignIn } = this.props;
    onSignIn(this.state);
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { authError, userAuth } = this.props;
    const message = authError ? 'Incorrect username/password' : 'Login success';
    if (!userAuth.isLoaded) return <div />;
    if (userAuth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" type="submit">
              Log In
            </button>
            {authError && <div className="red-text center">{message}</div>}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.authState.authError,
  userAuth: state.firebaseState.auth,
});

const mapDispatchToProps = dispatch => ({
  onSignIn: credential => dispatch(signIn(credential)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
