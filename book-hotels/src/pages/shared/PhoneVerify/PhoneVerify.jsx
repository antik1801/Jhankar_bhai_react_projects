import React, { useEffect } from "react";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { fireConfig } from "../../../firebase/firebase.config";

const PhoneVerify = ({auth}) => {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      firebaseui.auth.AuthUI(auth);
      ui.start('#otp-container',{  
        
       })
  }, []);
  return <div id="otp-container"></div>;
};

export default PhoneVerify;
