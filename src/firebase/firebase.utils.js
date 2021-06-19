import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBbsKU0rrkXbeJgLO8DElIhwGhiW3Duk-E",
    authDomain: "adta-db.firebaseapp.com",
    projectId: "adta-db",
    storageBucket: "adta-db.appspot.com",
    messagingSenderId: "1060480617771",
    appId: "1:1060480617771:web:0ebb2c4db5ffb3f395c96e",
    measurementId: "G-ED95Z2PJLF"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;