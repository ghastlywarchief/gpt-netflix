// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FIREBASE_API_KEY } from "./constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "netflix-gpt-2619f.firebaseapp.com",
  projectId: "netflix-gpt-2619f",
  storageBucket: "netflix-gpt-2619f.appspot.com",
  messagingSenderId: "930894788730",
  appId: "1:930894788730:web:f4d2e77fb4ce1aa275e3c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();