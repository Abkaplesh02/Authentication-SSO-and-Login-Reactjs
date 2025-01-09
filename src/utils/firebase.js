// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAoNgi6Tz9zFbGPmuMUd1Sywg7sFTHydtQ",
  authDomain: "loginprojectsso.firebaseapp.com",
  projectId: "loginprojectsso",
  storageBucket: "loginprojectsso.firebasestorage.app",
  messagingSenderId: "438605259185",
  appId: "1:438605259185:web:5fcf8dc175950306505d90",
  measurementId: "G-EDV9MGXBSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();