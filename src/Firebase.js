import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth } from 'firebase/auth'

const app = initializeApp({
  apiKey: "AIzaSyC5X7SoBByQIlqdlOwpgMumNe30_M6sdWY",
  authDomain: "holocron-e6f23.firebaseapp.com",
  projectId: "holocron-e6f23",
  storageBucket: "holocron-e6f23.appspot.com",
  messagingSenderId: "813088757127",
  appId: "1:813088757127:web:7335bda2aee6d37457ef22",
  measurementId: "G-D2487FH0L0"
});




export const firestore = getFirestore()
export const auth = getAuth(app)
export default app;



