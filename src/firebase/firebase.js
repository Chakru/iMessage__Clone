import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDnaLY6IWQAQ-zUif1I698gHO7icUOsmNY',
  authDomain: 'imessageclone-9b28f.firebaseapp.com',
  databaseURL: 'https://imessageclone-9b28f.firebaseio.com',
  projectId: 'imessageclone-9b28f',
  storageBucket: 'imessageclone-9b28f.appspot.com',
  messagingSenderId: '49046259994',
  appId: '1:49046259994:web:ec269b56dea7e1c4cfc4a3',
  measurementId: 'G-LJ5RXFKWZ1',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
