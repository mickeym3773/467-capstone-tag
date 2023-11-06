// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// TODO: Shift to environmental variables
const firebaseConfig = {
  apiKey: "AIzaSyCydBaJKBLwZKhl4nt99A_PDr1g810pl3U",
  authDomain: "fbauth-617b2.firebaseapp.com",
  databaseURL: "https://fbauth-617b2-default-rtdb.firebaseio.com",
  projectId: "fbauth-617b2",
  storageBucket: "fbauth-617b2.appspot.com",
  messagingSenderId: "1010557230779",
  appId: "1:1010557230779:web:bceccd4ca67e257f51139e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;