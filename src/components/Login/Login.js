import React, { useState } from 'react';



import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }


const Login = () => {
    const [user,setUser]=useState({
        isSignedIn:false,
        name:'',
         })
         const provider =new firebase.auth.GoogleAuthProvider();
         const handleSignIn=() =>{
             firebase.auth().signInWithPopup(provider)
             .then(res => {
                 const {displayName}=res.user;
                 const signedInUser ={
                    isSignedIn:true,
                    name:displayName
                 }
                 setUser(signedInUser)
            })
            .catch(err =>{
                console.log(err.message);
            })
         }
    return (
        <div className= "login">
            <button  style={{textAlign:"center"}} type="button" class="btn  btn-block btn-primary"  onClick={handleSignIn}> Sign In With Gmail</button>
            {
                user.isSignedIn && <p>Welcome ,{user.name}</p>
            }
            
        </div>
    );
};

export default Login;