import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "cara-web-d0114.firebaseapp.com",
  projectId: "cara-web-d0114",
  storageBucket: "cara-web-d0114.appspot.com",
  messagingSenderId: "513962756855",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-L5ZCCZ40QB"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);