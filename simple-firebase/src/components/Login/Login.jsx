import React, { useState } from "react";
import toast from 'react-hot-toast';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const gooleAppProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleSignIn = () => {
    signInWithPopup(auth, gooleAppProvider)
      .then((result) => {
        const user = result.user;
        toast.success("Successfully Entered 👍")
        setUser(user);
      })
      .catch((error) => toast.error(`${error} 🔥`));
  };
  const handleLogOut = () => {
    signOut(auth)
      .then((result) => {
        // console.log(result)
        toast.error('successfully logged out 🔥')
        setUser(null);
      })
      .catch((error) => toast.error(`${error} 🔥`));
  };
  const handleGithubSignIn = () =>{
    signInWithPopup(auth,githubProvider)
    .then(result =>{
      const user = result.user;
      toast.success("Successfully Entered 👍")
      setUser(user);
    })
    .catch(error => toast.error(`${error} 🔥`))
  }
  return (
    <div>
      {user ? (
        <button onClick={handleLogOut}>log out</button>
      ) : (
        <>
          <button onClick={handleSignIn}>Google Sign in</button>
          <button onClick={handleGithubSignIn}>Github Login</button>
        </>
      )}
      {user && (
        <div>
          <h2>{user.displayName}</h2>
          <h2>Email: {user.email}</h2>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
