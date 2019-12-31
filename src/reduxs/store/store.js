import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import firebase from 'firebase';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import ReducerRoot from '../reducers/ReducerRoot';
import firebaseConfig from '../../config/firebaseConfig';

const logger = createLogger();

export const store = createStore(
  ReducerRoot,
  undefined,
  compose(
    applyMiddleware(logger, thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, firebaseConfig),
  ),
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  attachAuthIsReady: true,
};

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
