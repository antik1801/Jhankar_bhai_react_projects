import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrianiWEUFWywbYWQPEoK4FuHAk3jW4cU",
  authDomain: "random-color-generator-f1421.firebaseapp.com",
  projectId: "random-color-generator-f1421",
  storageBucket: "random-color-generator-f1421.appspot.com",
  messagingSenderId: "552860120694",
  appId: "1:552860120694:web:bb8e97029775b117a95157"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
