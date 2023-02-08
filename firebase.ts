import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBHYJxvxojBxO6NFiuriK6V8Ef5dh54sgg",
  authDomain: "chatgpt-41795.firebaseapp.com",
  projectId: "chatgpt-41795",
  storageBucket: "chatgpt-41795.appspot.com",
  messagingSenderId: "177303114441",
  appId: "1:177303114441:web:2b9572b76f4584fec8b318",
  measurementId: "G-YKE586J8L3"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };