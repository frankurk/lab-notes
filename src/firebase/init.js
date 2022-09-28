import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import {firebaseConfig} from "../firebase/firebaseConfig.js";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export const auth = getAuth(app);





