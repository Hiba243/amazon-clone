import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvSenJcIf-qkx863u0Ebb6rpzsD5E7NfI",
    authDomain: "clone-d6025.firebaseapp.com",
    databaseURL: "https://clone-d6025-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "clone-d6025",
    storageBucket: "clone-d6025.appspot.com",
    messagingSenderId: "227228648570",
    appId: "1:227228648570:web:5a10b3c1bbab0004bd67c3",
    measurementId: "G-PJGNCGJQK0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };