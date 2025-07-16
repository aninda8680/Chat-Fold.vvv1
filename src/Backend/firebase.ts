import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCUKhhtCuChdNTbEtqc_50iyHHEa_QOlkI",
    authDomain: "chat-god-65bc8.firebaseapp.com",
    projectId: "chat-god-65bc8",
    storageBucket: "chat-god-65bc8.firebasestorage.app",
    messagingSenderId: "1007601134099",
    appId: "1:1007601134099:web:4f9ef8480caded4d852de6"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);