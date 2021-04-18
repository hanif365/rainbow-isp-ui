import React, { useContext, useState } from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import Navbar from '../Shared/Navbar/Navbar';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();


    const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    });

    // JWT Token

    const setUserToken = () =>{
        firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
            sessionStorage.setItem('token', idToken);
          }).catch(function(error) {
            // Handle error
          });
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser);
                history.replace(from);

                // JWT Token
                setUserToken();

            }).catch(err => {
                const errorCode = err.code;
                const errorMessage = err.message;
                const showError = {
                    error: err.message
                }
                setUser(showError);
            });
    }
    return (
        <div className=" py-5 text-center login-container">
             <Navbar></Navbar>
            <button onClick={handleGoogleSignIn} className="btn btn-info px-5">Sign In with Google</button>

        </div>
    );
};

export default Login;