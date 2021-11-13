import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import firebaseAuthentication from "../firebase/firebase.init";

firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // signin with Google
    const singInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))

    }
    const register = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser)

                // set DisplayName
                updateProfile(auth.currentUser, {
                    displayName: name

                }).then(() => {

                }).catch((error) => {

                });


                // save user info to database
                saveUserData(email, name)

            })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false))


    }

    // Handle email pasword log in
    const emailPassLogin = (email, password, location, history) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

            .finally(() => setIsLoading(false));
    }


    // User state checking
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [])


    // Save user info to database
    const saveUserData = (email, displayName) => {
        const user = { email, displayName }
        axios.post('https://safe-meadow-80713.herokuapp.com/adduser', user)
            .then()
    }

    // save data fro google log in
    const saveUserGoogle = (email, displayName) => {
        const user = { email, displayName }
        axios.put('https://safe-meadow-80713.herokuapp.com/adduser', user)
            .then()
    }


    // Log Out the user
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                // history.push(location.state?.from || '/')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }


    return {
        singInUsingGoogle,
        user,
        error,
        logOut,
        isLoading,
        register,
        emailPassLogin,
        saveUserGoogle
    }

};
export default useFirebase;