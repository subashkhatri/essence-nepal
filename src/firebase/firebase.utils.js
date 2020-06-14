import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDPBE9p7c2xTG8Y8Zpwe8O5bxKsPbV4-30",
    authDomain: "nepal-db.firebaseapp.com",
    databaseURL: "https://nepal-db.firebaseio.com",
    projectId: "nepal-db",
    storageBucket: "nepal-db.appspot.com",
    messagingSenderId: "1056883277575",
    appId: "1:1056883277575:web:cd36c43461cf48caa1cfa2",
    measurementId: "G-M8GKBJCZBJ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
