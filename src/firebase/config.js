import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBcD-XLTqvlqC6uqMpVd_wxXIM0iq2N0DQ',
  authDomain: 'ninja-firegram-5046b.firebaseapp.com',
  databaseURL: 'https://ninja-firegram-5046b.firebaseio.com',
  projectId: 'ninja-firegram-5046b',
  storageBucket: 'ninja-firegram-5046b.appspot.com',
  messagingSenderId: '353746793288',
  appId: '1:353746793288:web:743dc687a2a4b7fdab397d',
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
