import './App.css'
import firebase from "firebase/compat/app"
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import PhoneVerify from './PhoneVerify';

function App() {
  const [user,setUser] = useState(null);
  const firebaseConfig = {
    apiKey: "AIzaSyAvVG-wPJj6Qbja2kf9nW1kqMh0D1_4clw",
    authDomain: "verify-otp-26214.firebaseapp.com",
    projectId: "verify-otp-26214",
    storageBucket: "verify-otp-26214.appspot.com",
    messagingSenderId: "710173698972",
    appId: "1:710173698972:web:b694fd6da1ae7ce5ba3659"
  };
  firebase.initializeApp(firebaseConfig);
  useEffect(()=>{
    const unsubscriber = onAuthStateChanged(firebase.auth(),(currentUser)=>{
      console.log(currentUser);
      setUser(currentUser);
      
    })
    return ()=> unsubscriber();

  },[])
 
  return (
    <div className="App">
     
     <PhoneVerify auth={firebase.auth()}></PhoneVerify>
    </div>
  )
}

export default App
