import {
  createUserWithEmailAndPassword,
  getAuth, GoogleAuthProvider, onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const updateUser = (updateUserInfo) => {
    setLoading(true);
    return updateProfile(user, updateUserInfo);
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    createUser,
    signIn,
    googleSignIn,
    updateUser,
    resetPassword,
    logOut,
    user,
    loading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
