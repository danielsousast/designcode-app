import * as firebase from "firebase";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA6M3FP4Bdf2gxMps8hcEjlYRuEhsjjMkE",
  authDomain: "designcode-37410.firebaseapp.com",
  databaseURL: "https://designcode-37410.firebaseio.com",
  projectId: "designcode-37410",
  storageBucket: "designcode-37410.appspot.com",
  messagingSenderId: "305894725642",
  appId: "1:305894725642:web:454affef7d70a40c9167f3",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
