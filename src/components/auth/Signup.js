import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../reduxs/actions/ActionsAuth';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    };
  }

  handleChange = e =>
    this.setState({
      [e.target.id]: e.target.value,
    });

  handleSubmit = e => {
    e.preventDefault();
    const { onSignUp } = this.props;
    onSignUp(this.state);
    this.setState({
      password: '',
    });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { password } = this.state;
    const { userAuth, authError } = this.props;
    if (userAuth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="row">
            <div className="input-field col s6">
              <input type="text" id="firstName" onChange={handleChange} />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" onChange={handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={handleChange} />
            </div>
            <div className="input-field col s12">
              <label htmlFor="password">Password</label>
              <input type="password" value={password} id="password" onChange={handleChange} />
            </div>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" type="submit">
              Log In
            </button>
          </div>
          {authError && <p className="red-text center">{authError}</p>}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userAuth: state.firebaseState.auth,
  authError: state.authState.authError,
});

const mapDispatchToProps = dispatch => ({
  onSignUp: newUser => dispatch(signUp(newUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
