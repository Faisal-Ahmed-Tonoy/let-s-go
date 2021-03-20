import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleBlur =(event) => {}
    const handleSubmit=() => {}
    return (
    <div >
       
        <form onSubmit={handleSubmit} className="container col-sm-12 col-md-12   align-items-center justify-content-center w-100" style={{minHight:"100vh",maxWidth:"400px"}}>
        <h1>Log in</h1>
        <div  className="form-group  " >
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input onBlur={handleBlur} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
  
        </div>
        <div  className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input onBlur={handleBlur} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  required />
        </div>
        
        <button style={{borderRadius:"20px"}} type="submit" className="btn-block btn-success">Login</button>
         
        <Link to="/create">  <p className="nav-link" style={{color:'black', textDecoration:'none'}}>Don't have an account?  click here to create </p></Link>
      </form>
    
      </div>
    );
};

export default Login;