// Directions:
// 1. Copy this file, and rename it to firebase.js
// 2. Replace the firebaseConfig object with the object from Google Drive
// (email malloryr@oregonstate.edu for info)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "example",
  authDomain: "example",
  databaseURL: "example",
  projectId: "example",
  storageBucket: "example",
  messagingSenderId: "example",
  appId: "example"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;