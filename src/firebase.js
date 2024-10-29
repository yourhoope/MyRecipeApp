
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCx2tPOfBLXlEVbLItui0tTdbID9_R3QoE",
  authDomain: "recipeapp-7ce1b.firebaseapp.com",
  projectId: "recipeapp-7ce1b",
  storageBucket: "recipeapp-7ce1b.appspot.com",
  messagingSenderId: "971625043640",
  appId: "1:971625043640:web:85085dde23a164d9f4464d",
  measurementId: "G-Z0BYXJK2T2"
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_I,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, auth, db, storage };
