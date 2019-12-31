import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import Notification from './Notification';
import Projectlist from '../project/Projectslist';
import Preloader from './Preloader';

class Dashboard extends React.Component {
  render() {
    const { projects, userAuth, notifications } = this.props;
    if (!userAuth.uid) return <Redirect to="/signin" />;
    return !projects ? (
      <Preloader />
    ) : (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <Projectlist projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.firestoreState.ordered.project,
  userAuth: state.firebaseState.auth,
  notifications: state.firestoreState.ordered.notifications,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'project', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] },
  ]),
)(Dashboard);
