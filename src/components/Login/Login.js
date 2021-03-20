import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        email:'',
        password:''
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
    const handleBlur =(e) => {
        let isFieldValid =true;
    console.log(e.target.value,e.target.name);
    if(e.target.name ==='email'){
    isFieldValid =  /\S+@\S+\.\S+/.test(e.target.value);

    }
    if(e.target.name ==='password'){
      const isPasswordValid =  e.target.value.length >6;
      const passwordHasNumber =   /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
}
if(isFieldValid){
    const newUserInfo = {...user};
    newUserInfo[e.target.name] =e.target.value;
    setUser (newUserInfo);
  
  
  }
 
        
        
           
    }
    const  handleSubmit=() => {}
    return (
    <div >
         {
                user.isSignedIn && <p style={{marginBottom:'20px'}}>Welcome ,{user.name}</p>
            }
        
       
        <form onSubmit={handleSubmit} className="container col-sm-12 col-md-12   align-items-center justify-content-center w-100" style={{minHight:"100vh",maxWidth:"400px"}}>
        <h1>Log in</h1>
        <div  className="form-group  " >
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input onBlur={handleBlur} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
  
        </div>
        <div  className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input onBlur={handleBlur} type="password" className="form-control" id="exampleInputPassword1" placeholder="Must contain seven character with a number"  required />
        </div>
        
        <button  style={{textAlign:"center"}}  type="submit" className="btn-block  btn-primary">Login</button>
        <button  style={{textAlign:"center"}} type="button" class="btn btn-block btn-primary"  onClick={handleSignIn}> Sign In With Gmail</button>
           
         
        <Link to="/create">  <p className="nav-link" style={{color:'black', textDecoration:'none'}}>Don't have an account?  click here to create </p></Link>
      </form>
      
           
    
      </div>
    );
};

export default Login;