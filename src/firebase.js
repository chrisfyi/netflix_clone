import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "netflix-clone-b86e4.firebaseapp.com",
    projectId: "netflix-clone-b86e4.firebaseapp.com",
    storageBucket: "netflix-clone-b86e4.appspot.com",
    messagingSenderId: "691402863293",
    appId: "1:691402863293:web:441c76d863de33b81abdd4",
    measurementId: "G-17FGL2K202"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const auth = firebase.auth();

  export { auth }
  export default db;

