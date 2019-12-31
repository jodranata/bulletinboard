import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from '../constants/Constants';

export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => dispatch({ type: LOGIN_SUCCESS }))
      .catch(error => dispatch({ type: LOGIN_ERROR, error }));
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: SIGNOUT_SUCCESS }));
    firebase.logout();
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const { firstName, lastName, email, password } = newUser;
    const initials = firstName[0] + lastName[0];
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        return firestore
          .collection('users')
          .doc(res.user.uid)
          .set({
            firstName,
            lastName,
            initials,
          });
      })
      .then(() => dispatch({ type: SIGNUP_SUCCESS }))
      .catch(error => dispatch({ type: SIGNUP_ERROR, error }));
  };
};
