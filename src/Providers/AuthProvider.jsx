import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const auth = getAuth(app);

    // create new user

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //signIn user
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signOut
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    //authState changed

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('state changed', currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe()
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;