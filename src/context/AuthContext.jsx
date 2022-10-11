import React, { createContext, useState, useEffect } from 'react';
import {auth} from "../firebase/init";
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //OBSERVER
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);


  const handleNameInput = (e) => {
    setName(e.target.value);
  }

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  }

  //POST REQUEST FOR LOGIN
  return (
    <AuthContext.Provider value={{ name, setName, email, setEmail, password, setPassword, handleEmailInput, handleNameInput, handlePasswordInput }}>
      {children}
    </AuthContext.Provider>
  );
};
