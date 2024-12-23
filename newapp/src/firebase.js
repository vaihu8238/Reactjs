// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {//nevere remove this object
  apiKey: "AIzaSyDxvoJ7NLauL0Cc0jrjR9ppmO35AjJPT0E",
  authDomain: "firstproject-914ba.firebaseapp.com",
  projectId: "firstproject-914ba",
  storageBucket: "firstproject-914ba.firebasestorage.app",
  messagingSenderId: "792599175438",
  appId: "1:792599175438:web:1cd097c3c40c9a9439775f",
  measurementId: "G-D4XN73WKCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);