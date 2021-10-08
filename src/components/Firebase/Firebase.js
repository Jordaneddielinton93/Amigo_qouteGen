// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

import "firebase/auth"
require('firebase/analytics')

const firebaseConfig = {
  apiKey: "AIzaSyCWfOElMwRPJNuI4GVEGpAnILISpLidLdM",
  authDomain: "randomquotegenerator-ddee7.firebaseapp.com",
  projectId: "randomquotegenerator-ddee7",
  storageBucket: "randomquotegenerator-ddee7.appspot.com",
  messagingSenderId: "467833903840",
  appId: "1:467833903840:web:21e37d090654d603e88e85"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// get database from firebase store
// const database = firebase.firestore()


export {db}
