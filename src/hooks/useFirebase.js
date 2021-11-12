import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import firebaseAuthentication from "../firebase/firebase.init";

firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const location = useLocation()
    const history = useHistory();
    const googleProvider = new GoogleAuthProvider();

    // signin with Google
    const singInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

            // .then(result => {
            //     // setUser(result.user)
            //     console.log(result.user)
            // })
            // .catch(error => {
            //     setError(error.message)
            // })
            .finally(() => setIsLoading(false))

    }
    const register = (email, password, name) => {
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

                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            });
    }
    const emailPassLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                history.push(location.state?.from || '/')
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

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
        axios.post('http://localhost:5000/adduser', user)
            .then()
    }
    const saveUserGoogle = (email, displayName) => {
        const user = { email, displayName }
        axios.put('http://localhost:5000/adduser', user)
            .then()
    }


    // Log Out the user
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                history.push(location.state?.from || '/')
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