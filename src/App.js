import logo from './logo.svg';
import './App.css';
import { Button,NavDropdown,Navbar,Nav, Brand} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const  UserContext =  createContext();



function App() {
  const [loggedInUser,setLoggedInUser] =useState({});
  return (
  <UserContext.Provider value ={[loggedInUser,setLoggedInUser] }>
   
    <Router>
        
       <h2>Email :{loggedInUser.email}</h2>
       
       <Header></Header>
       
      
       
      
    
    <Switch>
    <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            
            <PrivateRoute  path="/destination">
             <Destination></Destination>
            </PrivateRoute>
            <Route  path="/login">
             <Login></Login>
            </Route>
            
  
        </Switch>
   
    </Router>
    </UserContext.Provider>
 
  );
}

export default App;