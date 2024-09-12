// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCx2tPOfBLXlEVbLItui0tTdbID9_R3QoE",
  authDomain: "recipeapp-7ce1b.firebaseapp.com",
  projectId: "recipeapp-7ce1b",
  storageBucket: "recipeapp-7ce1b.appspot.com",
  messagingSenderId: "971625043640",
  appId: "1:971625043640:web:85085dde23a164d9f4464d",
  measurementId: "G-Z0BYXJK2T2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
