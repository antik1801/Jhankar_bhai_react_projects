import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA21JFkgthT1-sG1y2JD7M0mCuXX2UPswg",
  authDomain: "user-validation-karma.firebaseapp.com",
  projectId: "user-validation-karma",
  storageBucket: "user-validation-karma.appspot.com",
  messagingSenderId: "897552531839",
  appId: "1:897552531839:web:f11977d1f56623b6999a4a"
};

export const app = initializeApp(firebaseConfig);