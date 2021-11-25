import React, {useContext, useState, useEffect} from 'react'
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}


export default function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    async function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
         
    }

    async function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
        
    }

    useEffect(() => {
        const unsubsribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
            
        })


        return unsubsribe;
    }, [])

    const value = {
        currentUser,
        signup,
        login,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
