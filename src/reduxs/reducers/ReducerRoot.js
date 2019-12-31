import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import ReducerAuth from './ReducerAuth';
import ReducerProject from './ReducerProject';

const ReducerRoot = combineReducers({
  authState: ReducerAuth,
  projectState: ReducerProject,
  firestoreState: firestoreReducer,
  firebaseState: firebaseReducer,
});

export default ReducerRoot;
