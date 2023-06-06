import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAqtnjnvwbfHAL3WJtflBcB7OFZ-DjdBAg",
    authDomain: "clone-4da6f.firebaseapp.com",
    projectId: "clone-4da6f",
    storageBucket: "clone-4da6f.appspot.com",
    messagingSenderId: "951976413837",
    appId: "1:951976413837:web:180767d5f0a49779c630c4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };