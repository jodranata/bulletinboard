import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../constants/Constants';

export const actionCreateProject = project => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const { firstName, lastName } = getState().firebaseState.profile;
    const { uid } = getState().firebaseState.auth;
    firestore
      .collection('project')
      .add({
        ...project,
        authorFirstName: firstName,
        authorLastName: lastName,
        authorID: uid,
        createdAt: new Date(),
      })
      .then(() => dispatch({ type: CREATE_PROJECT, project }))
      .catch(error => dispatch({ type: CREATE_PROJECT_ERROR, error }));
  };
};

export const actionDeleteProject = project => ({
  type: 'REMOVE_PROJECT',
  project,
});
