// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAt0fnbvKeHQ65fDNXJRFce67W_7M5I5v0",
  authDomain: "prepwise-17042004.firebaseapp.com",
  projectId: "prepwise-17042004",
  storageBucket: "prepwise-17042004.firebasestorage.app",
  messagingSenderId: "398887587162",
  appId: "1:398887587162:web:50f1d369b144ed019ef763",
  measurementId: "G-5H6RKQHG1L"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth=getAuth(app);
export const db= getFirestore(app);