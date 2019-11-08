 var firebaseConfig = {
    apiKey: "AIzaSyDSES-R2Xw3GH1-XhXzhUBQP0aUyJJ7nkM",
    authDomain: "crud-udemy-a3c92.firebaseapp.com",
    databaseURL: "https://crud-udemy-a3c92.firebaseio.com",
    projectId: "crud-udemy-a3c92",
    storageBucket: "crud-udemy-a3c92.appspot.com",
    messagingSenderId: "122307934348",
    appId: "1:122307934348:web:f7ed7843a16e50785ae3a9",
    measurementId: "G-8NV8D236NQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  import firebase from 'firebase/app'
  import firestore from 'firebase/firestore'