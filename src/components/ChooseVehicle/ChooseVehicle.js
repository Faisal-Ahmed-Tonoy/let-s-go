import React from 'react';
import './ChooseVehicle.css';
import {Card, Button,Navbar,NavDropdown,Nav } from 'react-bootstrap';

const ChooseVehicle = (props) => {
    const {id,name,quantity,cost,image} =props.vehicle
    return (
        <div className="card container-fluid col-lg-3  mt-5 "  >
            <div className="vehicle-card">
            <div ><img className="card-img-top" src={image} alt="Card image cap" /> 
            </div>
        
        <div className="card-body">
          <h5 style={{textAlign:"center"}} className="card-title">{name}</h5>
          </div>
          </div>
        
      </div>
    );
};

export default ChooseVehicle;