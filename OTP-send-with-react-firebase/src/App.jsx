import { useEffect, useState } from "react";
import "./App.css";
import PhoneVerify from "./components/PhoneVerify/PhoneVerify";
import firebase from "firebase/compat/app";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscriber = onAuthStateChanged(firebase.auth(), (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
    });

    return () => unSubscriber();
  }, []);

  return (
    <div className="App">
      <h1>Verify Phone Number with OTP</h1>
      <PhoneVerify auth={firebase.auth()}></PhoneVerify>
    </div>
  );
}

export default App;
