import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmkOyDmtO9wk70y9UYG2CBX_j2V_ahxrM",
  authDomain: "chatgpt-6ee18.firebaseapp.com",
  projectId: "chatgpt-6ee18",
  storageBucket: "chatgpt-6ee18.appspot.com",
  messagingSenderId: "48917307486",
  appId: "1:48917307486:web:34b12e91b070ed9f2654cf",
  measurementId: "G-1Z1RJ331L2"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }