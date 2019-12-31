import React from 'react';
import moment from 'moment';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

function Projectdetail(props) {
  const { project, userAuth } = props;
  if (!userAuth.uid) return <Redirect to="/signin" />;
  if (project) {
    const { title, content, authorFirstName, authorLastName, createdAt } = project;
    const projectDate = moment(createdAt.toDate()).calendar();
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <span className="card-title"> {title} </span>
            <p>{content}</p>
          </div>
          <div className="card-action red lighten-1 white-text">
            <div>{`Posted by ${authorFirstName} ${authorLastName}`}</div>
            <div>{projectDate}</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container center white-text loading-text">
      <p>Loading Project...</p>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  const { id } = props.match.params;
  const projects = state.firestoreState.data.project;
  const project = projects ? projects[id] : null;
  return {
    userAuth: state.firebaseState.auth,
    project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'project' }]),
)(Projectdetail);
