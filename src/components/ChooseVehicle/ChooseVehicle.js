import React from 'react';
import './ChooseVehicle.css';
import {Card, Button,Navbar,NavDropdown,Nav } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ChooseVehicle = (props) => {
    const {id,name,quantity,cost,image} =props.vehicle
    const history = useHistory()
    const handleProceed =() =>{
        history.push('/destination')
    }
    
    return (
        <div className="card container-fluid col-lg-3  mt-5 "  >
            <div className="vehicle-card">
            <div ><img className="card-img-top" src={image} alt="Card image cap" /> 
            </div>
        
        <div className="card-body">
           
          <button onClick={handleProceed} style={{textAlign:"center"}} type="button" class="btn  btn-block btn-primary">{name}</button>
          </div>
          </div>
        
      </div>
    );
};

export default ChooseVehicle;