// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFN4zT8WuaupOPcWO2w8Dgrq1q4cs6gFI",
    authDomain: "book-hotels-e3d84.firebaseapp.com",
    projectId: "book-hotels-e3d84",
    storageBucket: "book-hotels-e3d84.appspot.com",
    messagingSenderId: "950344513692",
    appId: "1:950344513692:web:928027690272a49b73d559"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const fireConfig = firebase.initializeApp(firebaseConfig)