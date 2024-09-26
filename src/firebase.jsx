// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZFIH7kFiVg1-vruVrD56O2N7-uimfZxk",
  authDomain: "hackathonpinolero.firebaseapp.com",
  projectId: "hackathonpinolero",
  storageBucket: "hackathonpinolero.appspot.com",
  messagingSenderId: "304997398343",
  appId: "1:304997398343:web:a20b43940027d6b686be62",
  measurementId: "G-2W08JYY9FG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)