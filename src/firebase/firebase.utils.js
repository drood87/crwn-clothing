import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCNH2FpF9yTm2etU93523H5PER4eXLLA9s',
  authDomain: 'crwn-db-5f9a3.firebaseapp.com',
  databaseURL: 'https://crwn-db-5f9a3.firebaseio.com',
  projectId: 'crwn-db-5f9a3',
  storageBucket: '',
  messagingSenderId: '826482702455',
  appId: '1:826482702455:web:dc6c1670fba3fe52',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
