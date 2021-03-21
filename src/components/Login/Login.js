import React, { useContext, useState } from 'react'

 
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }

function Login() {
  const [newUser,setNewUser] = useState(false);
  const [isError,setIsError] =useState("");
  
  const [confirmPassword,setConfirmPassword] =useState("");
  const [user,setUser]=useState({
    isSignedIn:false,
    newUser:false,
    name:'',
    email:'',
    photo:'',
    password:'',
    confirmPassword: ""
   
    
  })
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const history =useHistory();
  const location=useLocation();
  const { from } = location.state || { from: { pathname: "/" } };


  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();  
  const handleSignIn =() =>{
    firebase.auth().signInWithPopup(googleProvider)
    .then(res =>{
      const {displayName,photoURL,email} =res.user;
      const signInUser ={
        isSignedIn:true,
        name:displayName,
        email:email,
        photo:photoURL

      } 
      setUser(signInUser);
      setLoggedInUser(signInUser);
      history.replace(from);
     
    }) .catch(err =>{
      console.log(err);
      console.log(err.message);
    })

  }
  const handleFbSignIn =() =>{
    firebase
  .auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;
    console.log('fb user after sign in', user);

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });

  }
  const handleSignOut =() => {
    firebase.auth().signOut()
    .then(res =>{
      const signedOutUser ={
        isSignedIn:false,
        name:'',
        email:'',
        photo:'',
        error:'',

        success:false
      }
      setUser(signedOutUser)

    })
    .catch (err => {

    })
   

  }
  const handleBlur  =(e) =>{
    let isFieldValid =true;
    console.log(e.target.value,e.target.name);
    if(e.target.name ==='email'){
    isFieldValid =  /\S+@\S+\.\S+/.test(e.target.value);

    }
    if(e.target.name ==='password'){
      const isPasswordValid =  e.target.value.length >6;
      const passwordHasNumber =   /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
}if(isFieldValid){
  const newUserInfo = {...user};
  newUserInfo[e.target.name] =e.target.value;
  setUser (newUserInfo);


}

  }
  const handleSubmit =(e) => {
    console.log(user.email,user.password)
    if(newUser && user.email && user.password){
      console.log('submitting')
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  .then(res => {
    const newUserInfo ={...user};
    newUserInfo.error='';
    newUserInfo.success=true;
    setUser(newUserInfo);
    updateUserName(user.name);
    setLoggedInUser(newUserInfo);
    history.replace(from);
 
    // Signed in 
   
    // ...
  })
  .catch((error) => {
    const newUserInfo ={...user};
    newUserInfo.error=error.message;
    newUserInfo.success=false;
    setUser(newUserInfo);
     
    console.log(error.message)
    // ..
  });

    }
    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then((res) => {
    // Signed in
    const newUserInfo ={...user};
    newUserInfo.error='';
    newUserInfo.success=true;
    setUser(newUserInfo);
    setLoggedInUser(newUserInfo);
    history.replace(from);
    // ...
  })
  .catch((error) => {
    const newUserInfo ={...user};
    newUserInfo.error=error.message;
    newUserInfo.success=false;
    setUser(newUserInfo);
     
    console.log(error.message)
    // ..
  
  });

    }
    e.preventDefault();

  }
   
    
  const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
      
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
  const checkValidation=(e) => {
    setConfirmPassword (e.target.value)
    if(user.password !== e.target.value){
      setIsError('Password Must Contain Seven Characters With a Number.Password Must Match With Confirm Password');
 }
 else{
   setIsError("");
 }
    
  }
  
  return (
    <div className="container colo-lg-12 col-sm-12 col-md-12 mt-4 mb-5  pt-3 align-items-center justify-content-center w-100 " style={{minHight:"100vh",maxWidth:"264px",border:'1px solid black',borderRadius:'10px',boxShadow: '1px 1px'}}>
      
     { user.isSignedIn?
       <button className="btn btn-block btn-primary" onClick={handleSignOut} >Sign Out</button>:
       <button className="btn btn-block btn-primary" onClick={handleSignIn}>Sign In With Google</button>
     } 
    
        <h1 style={{color:"#007BFF"}}> SignUp and Login </h1>
        <input type="checkbox" onChange={() =>setNewUser(!newUser)} name="newUser" id=""/>
        <label  style={{color:"#007BFF"}} htmlFor="newUser"> New User? Enter Your Name.</label>
        <p style={{color:"red" ,width:"100%",alignSelf:'center'}}>
          {isError}

        </p>
        
        
      <form  onSubmit={handleSubmit} action="" >
        {newUser && <input   className="mb-2" name="name" type="text" onBlur={handleBlur} placeholder="Your Name"/>}
        
        <br/>
      <input className="mb-2" type="text"onBlur={handleBlur}  name="email" placeholder="Write Your Emil Address" required/>
        <br/>
        <input className="mb-2" type="password" onBlur={handleBlur}  required placeholder="Your password" name="password" id=""/>
        <br/>
        <input className="mb-2" type="password" value={confirmPassword} onChange={(e) =>checkValidation(e)}   required placeholder="Confirm Password" name="confirmPassword" id=""/>
        <br/>
        <input className="btn btn-block btn-primary mt-1" type="submit"  value={newUser ? 'SignUp':'SignIn'}/>
      
       
      </form>
      <p style={{color:'red'}}>{user.error}</p>
     {user.success && <p style={{color:'green'}}>User {newUser?'created' :'Logging'} SuccessFully{user.error} </p>} 
    </div>
  );
}

export default Login;