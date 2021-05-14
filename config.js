import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyCtFQ_1tJGm8Ga1qvSWhyclS5_rU-cvr9o",
    authDomain: "textbook-declutter.firebaseapp.com",
    projectId: "textbook-declutter",
    storageBucket: "textbook-declutter.appspot.com",
    messagingSenderId: "612595421149",
    appId: "1:612595421149:web:444a5115f8ff876008f034"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
