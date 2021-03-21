import React, { useEffect, useState } from 'react';
import Bg from '../../images/Bg.png'
import './Home.css';
import vehicleData from '../../data/data.json';
import ChooseVehicle from '../ChooseVehicle/ChooseVehicle';
import Destination from '../Destination/Destination';
 
const Home = () => {
    const [vehicles,setVehicles]= useState([]);
    useEffect(() =>{
        setVehicles(vehicleData);
        console.log(vehicleData);
    })
    return (
       
            
            <div className="row home" >
                    <img className="card-img-bottom" src={Bg} alt="Card image cap" />
                   
        
        
        {
            vehicles.map(vehicle => <ChooseVehicle vehicle={vehicle}></ChooseVehicle>)
        }
     
      </div>
         
        
    );
};

export default Home;