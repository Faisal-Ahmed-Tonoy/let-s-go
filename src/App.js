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

function App() {
  return (
    
   
    <Router>
       <h1>User Name: </h1>  
       <Header></Header>
    
    <Switch>
  
        </Switch>
   
    </Router>
 
  );
}

export default App;
