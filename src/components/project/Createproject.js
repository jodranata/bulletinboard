import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreateProject } from '../../reduxs/actions/ActionsProjects';

class Createproject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ``,
    };
  }

  handleChange = e =>
    this.setState({
      [e.target.id]: e.target.value,
    });

  handleSubmit = e => {
    e.preventDefault();
    const { onCreateProject, history } = this.props;
    onCreateProject(this.state);
    history.push('/');
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { userAuth } = this.props;
    if (!userAuth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project content</label>
            <textarea id="content" className="materialize-textarea" onChange={handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" type="submit">
              Create Projects
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userAuth: state.firebaseState.auth,
});

const mapDispatchToProps = dispatch => ({
  onCreateProject: project => dispatch(actionCreateProject(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Createproject);
