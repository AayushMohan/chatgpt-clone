import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmkOyDmtO9wk70y9UYG2CBX_j2V_ahxrM",
  authDomain: "chatgpt-6ee18.firebaseapp.com",
  projectId: "chatgpt-6ee18",
  storageBucket: "chatgpt-6ee18.appspot.com",
  messagingSenderId: "48917307486",
  appId: "1:48917307486:web:644e19744dba4d8c2654cf",
  measurementId: "G-C2F0ED1D6T"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };