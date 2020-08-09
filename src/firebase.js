import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDQaeYmH-uugmsbBQY0pcdy34V8JqI4Eog',
  authDomain: 'clone-b8c12.firebaseapp.com',
  databaseURL: 'https://clone-b8c12.firebaseio.com',
  projectId: 'clone-b8c12',
  storageBucket: 'clone-b8c12.appspot.com',
  messagingSenderId: '573587962580',
  appId: '1:573587962580:web:ef1da8a984c10c88e25941',
  measurementId: 'G-5QNQDMWN2X',
});

const auth = firebase.auth();

export { auth };
