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
        
       
       <Header></Header>
      
       
      
    
    <Switch>
    <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
  
        </Switch>
   
    </Router>
 
  );
}

export default App;