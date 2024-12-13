// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEnJo0hPCiakbOa0XuqAzV3CxpjoVMtt8",
  authDomain: "firat-randevu.firebaseapp.com",
  projectId: "firat-randevu",
  storageBucket: "firat-randevu.appspot.com",
  messagingSenderId: "570519719934",
  appId: "1:570519719934:web:782433488bac755cbbbaaf",
  measurementId: "G-NNT5T46NVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);