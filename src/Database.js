import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey:process.env.REACT_APP_key,
  authDomain: "reactcrud-78a69.firebaseapp.com",
  projectId: "reactcrud-78a69",
  storageBucket: "reactcrud-78a69.appspot.com",
  messagingSenderId: "782853212765",
  appId: "1:782853212765:web:f7fdde5c06d1fcc0e31bb4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);
