import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDmR3fSwV-E7xzaadHxRYT1XRTwMm3i5QU",
    authDomain: "authentication-18c12.firebaseapp.com",
    databaseURL: "https://authentication-18c12.firebaseio.com",
    projectId: "authentication-18c12",
    storageBucket: "authentication-18c12.appspot.com",
    messagingSenderId: "400239477780"
  };

export const firebaseApp = firebase.initializeApp(config);
