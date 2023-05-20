import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebase = initializeApp({
    apiKey: "AIzaSyBSeBehtZJV6dHPvOK2xgZ5MYuRMmZPuqc",
    authDomain: "jumbo-react-material.firebaseapp.com",
    projectId: "jumbo-react-material",
    storageBucket: "jumbo-react-material.appspot.com",
    messagingSenderId: "717603775926",
    appId: "1:717603775926:web:e1b7e8267856a793a28d17",
});

export const auth = getAuth(firebase);