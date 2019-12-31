import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAoK21BpbTLv6sx_xgb30lxxPEXhC89uM8',
  authDomain: 'react-projectmanagementtool.firebaseapp.com',
  databaseURL: 'https://react-projectmanagementtool.firebaseio.com',
  projectId: 'react-projectmanagementtool',
  storageBucket: 'react-projectmanagementtool.appspot.com',
  messagingSenderId: '837354897817',
  appId: '1:837354897817:web:cb4dd012f6beb3096d9308',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
