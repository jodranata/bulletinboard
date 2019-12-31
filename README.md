## React-BulletinBoard

A simple bulletin board where authenticated user can post memo/messages onlineand also view the ones created by other authenticated user.


### Tools

This project was created using React and bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Powered by [Firebase Development Platform](https://firebase.google.com/).

[Redux](https://redux.js.org/) & [React-Redux](https://react-redux.js.org/) for containing and managing the app's state.

The redux middleware implemented in the app are [Redux-Thunk](https://redux-saga.js.org/) for any asynchronous actions that fetch data from the database and [Redux-Logger](https://www.npmjs.com/package/redux-logger) as a logger that display redux action and state to browser's console.

Utilize [Firebase Cloud Firestore](https://firebase.google.com/) to store & sync user's data, acting as a database and [Firebase Auth](https://firebase.google.com/) for authentication.

[React-Redux-Firebase](https://www.npmjs.com/package/react-redux-firebase) is applied as a Redux binding for Firebase.

Using [React-Router](https://www.npmjs.com/package/react-router-dom) for handling page navigations.
