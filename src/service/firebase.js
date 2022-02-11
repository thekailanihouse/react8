import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBaBN9AVA9PccWxh_BExWTTObiYp4e-vhU",
  authDomain: "project-binar.firebaseapp.com",
  databaseURL: "https://project-binar-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-binar",
  storageBucket: "project-binar.appspot.com",
  messagingSenderId: "847612182343",
  appId: "1:847612182343:web:16b3f487370b9b66811662",
  measurementId: "G-1RZQ3LYV6L"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const auth = getAuth() 