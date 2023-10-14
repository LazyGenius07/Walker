// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgUUdqI5qMEuJsyAepUSoQDc4I_8EWvt4",
  authDomain: "razz-73.firebaseapp.com",
  projectId: "razz-73",
  storageBucket: "razz-73.appspot.com",
  messagingSenderId: "13334835711",
  appId: "1:13334835711:web:8535e13276d952f73bb7ca",
  measurementId: "G-DLB1PDCGE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db = getFirestore(app);