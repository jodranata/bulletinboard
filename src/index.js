import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import './index.css';
import App from './components/layout/App';
import * as serviceWorker from './serviceWorker';
import { store, rrfProps } from './reduxs/store/store';

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebaseState.auth);
  if (!isLoaded(auth)) return <div />;
  return children;
};

ReactDOM.render(
  <Provider store={store}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
