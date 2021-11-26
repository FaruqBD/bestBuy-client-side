import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import initializeAuthentication from './../components/Login/Firebase/firebase.init'

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const history = useHistory();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
        .then(({user})=>{
            saveUser(user.email, user.displayName, 'PUT')
        });

    }

    const registerUserWithEmailAndPassword = (email, password, name) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    saveUser(email, name, 'POST');
                }).catch((error) => {

                });
            });
    }
    const signInUserWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                history.push("/");
             })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) =>{
        const user = {email, displayName};
        fetch('https://mighty-lowlands-78607.herokuapp.com/user',{
            method:method,
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    useEffect(()=>{
    fetch(`https://mighty-lowlands-78607.herokuapp.com/user/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])

    return {
        user,
        isLoading,
        admin,
        saveUser,
        signInUsingGoogle,
        logOut,
        signInUserWithEmailAndPassword,
        registerUserWithEmailAndPassword
    }
}

export default useFirebase;