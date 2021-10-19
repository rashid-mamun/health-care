// import initializeAuthentication from './Firebase/firebase.initialize';
import initializeAuthentication from '../pages/Login/Firebase/firebase.initialize'
import {
    getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification
} from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false));

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);


    const handleLogOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));

    }
    return {
        user,
        error,
        signInUsingGoogle,
        handleLogOut,
        createUserWithEmailAndPassword,
        auth,
        updateProfile,
        signInWithEmailAndPassword,
        sendEmailVerification,
        isLoading
    }

}
export default useFirebase;