import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext()


const ContextApi = ({children}) => {

    const [user,setUser]= useState();
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);


    const googleSingUpHandle = ()=>{
        return  signInWithPopup(auth, provider)


    }


    const userLogOut = () =>{
        localStorage.removeItem("token")
        return signOut(auth)
    }

    useEffect(()=>{
       let unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
       })
       return ()=>{
        unsubscribe()
       }
    },[])

    let  authInfo = {user,googleSingUpHandle,userLogOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default ContextApi;