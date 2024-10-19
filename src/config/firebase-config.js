// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBEfxFjGjsom7EsHWpMFv3GAORwH56G-M",
  authDomain: "expense-tracker-87e7e.firebaseapp.com",
  projectId: "expense-tracker-87e7e",
  storageBucket: "expense-tracker-87e7e.appspot.com",
  messagingSenderId: "754484285739",
  appId: "1:754484285739:web:d7b45f6b0443d3a305b56e",
  measurementId: "G-05TBRF2KGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
//firebase login 
//firebase init 
//firebase deploy
