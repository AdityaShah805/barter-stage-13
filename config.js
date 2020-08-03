import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCZIgi0FdDBiIWTKPmXu5kHaGnghe6Z-ZM",
  authDomain: "barter-master-app.firebaseapp.com",
  databaseURL: "https://barter-master-app.firebaseio.com",
  projectId: "barter-master-app",
  storageBucket: "barter-master-app.appspot.com",
  messagingSenderId: "667401104081",
  appId: "1:667401104081:web:4cf08077c10a8866bbb3f0",
  measurementId: "G-Y591HVWZXT"
};
// Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
