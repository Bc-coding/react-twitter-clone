import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXpOo9Pk44dW_FneFCVWAS7Z9nFLsYNfg",
  authDomain: "bc-twitter-clone.firebaseapp.com",
  databaseURL: "https://bc-twitter-clone.firebaseio.com",
  projectId: "bc-twitter-clone",
  storageBucket: "bc-twitter-clone.appspot.com",
  messagingSenderId: "150077040291",
  appId: "1:150077040291:web:035a5a5d8a399e61770116",
  measurementId: "G-FZS2C8JGTC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
