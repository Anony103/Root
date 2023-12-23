import {initializeApp}  from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFj8stfbwUlPkajRLsBEOOGF5n6578MA4",
  authDomain: "root16-3979e.firebaseapp.com",
  projectId: "root16-3979e",
  storageBucket: "root16-3979e.appspot.com",
  messagingSenderId: "12594338938",
  appId: "1:12594338938:web:2545dc8cfe686a72b2afc3",
  measurementId: "G-0077RDM0X6"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);