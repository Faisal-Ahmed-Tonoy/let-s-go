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

function App() {
  return (
  
   
    <Router>
        
       
       <Header></Header>
       
      
       
      
    
    <Switch>
    <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route  path="/destination">
             <Destination></Destination>
            </Route>
            <Route  path="/login">
             <Login></Login>
            </Route>
  
        </Switch>
   
    </Router>
 
  );
}

export default App;