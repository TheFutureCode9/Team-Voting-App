import firebase from 'firebase';

  var 
    
  firebaseConfig = {
  apiKey: "AIzaSyBNaQdEHHcgz98cxfnpzB8peZ2aGsVnd8I",
  authDomain: "voting-app-3be02.firebaseapp.com",
  databaseURL: "https://voting-app-3be02-default-rtdb.firebaseio.com",
  projectId: "voting-app-3be02",
  storageBucket: "voting-app-3be02.appspot.com",
  messagingSenderId: "355865873929",
  appId: "1:355865873929:web:2841ee0f102bd8e5c572d8",
  measurementId: "G-PH7HY84F13"    
  };

  
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();