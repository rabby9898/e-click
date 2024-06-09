// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm_x3DgEAPizwgAx4ME-Ak2bLlQ0oQTJE",
  authDomain: "eclick-ecommerce.firebaseapp.com",
  projectId: "eclick-ecommerce",
  storageBucket: "eclick-ecommerce.appspot.com",
  messagingSenderId: "307436804812",
  appId: "1:307436804812:web:1be89946f1a31d418b0069",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
