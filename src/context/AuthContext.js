import React, { createContext } from 'react';
import {
    createUserWithEmailAndPassword,
  } from 'firebase/auth';
  import { auth, provider } from './init.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 



  //POST REQUEST FOR LOGIN
  return (
    <AuthContext.Provider value={{ headers, setIsLoggedin}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;