import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBn9tY-phqHOPovG62VskEtmGoaD1h5BJ8",
    authDomain: "msage-db.firebaseapp.com",
    databaseURL: "https://msage-db.firebaseio.com",
    projectId: "msage-db",
    storageBucket: "msage-db.appspot.com",
    messagingSenderId: "511411621651",
    appId: "1:511411621651:web:e336fe81432ab1988454e6"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
