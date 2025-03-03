// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWt6v_tm41he2EcAPHq2gGiSDDTe8nWB8",
  authDomain: "lancerexchane.firebaseapp.com",
  projectId: "lancerexchane",
  storageBucket: "lancerexchane.firebasestorage.app",
  messagingSenderId: "421507201263",
  appId: "1:421507201263:web:995e88461dd17aac2b031a",
  measurementId: "G-MNZKEB10SQ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };