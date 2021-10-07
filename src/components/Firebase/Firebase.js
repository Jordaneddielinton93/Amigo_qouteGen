// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

import "firebase/auth"
require('firebase/analytics')

const firebaseConfig = {
  apiKey: "AIzaSyDpeQT4d-8Dp1L-k0LAMHQDgyYut5YEE5w",
  authDomain: "qoutegen.firebaseapp.com",
  projectId: "qoutegen",
  storageBucket: "qoutegen.appspot.com",
  messagingSenderId: "843112792015",
  appId: "1:843112792015:web:374042161fe2ee1b7e1cba"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// get database from firebase store
// const database = firebase.firestore()


export {db}
