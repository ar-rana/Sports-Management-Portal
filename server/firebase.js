// Import the functions you need from the SDKs you need
const { initializeApp, getApp, getApps } =  require("firebase/app");
const { getFirestore } =  require("firebase/firestore");
require('dotenv').config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: "sports-management-portal-51190",
  storageBucket: "sports-management-portal-51190.appspot.com",
  messagingSenderId: "487989716955",
  appId: "1:487989716955:web:5223b28a22c25e309769fe",
  measurementId: "G-T30MWZDTKQ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

export { app, db }

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);