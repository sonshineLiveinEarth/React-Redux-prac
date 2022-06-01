// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFONuQFCE705WNTghZSjDl7RYlnyMybxU",
  authDomain: "memo-project-23e3b.firebaseapp.com",
  projectId: "memo-project-23e3b",
  storageBucket: "memo-project-23e3b.appspot.com",
  messagingSenderId: "903985711740",
  appId: "1:903985711740:web:b8629df58107e7b77717f9",
  measurementId: "G-8DX3CD7HPD",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();
