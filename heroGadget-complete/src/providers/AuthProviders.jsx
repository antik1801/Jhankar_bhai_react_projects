import React, { createContext, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"

const auth = getAuth(app)
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () =>{
       return signInWithPopup(auth,githubProvider);
    }

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) =>{
       return signInWithEmailAndPassword(auth,email,password)
    }

    const authinfo = {
        user,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;