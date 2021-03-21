 import React, { useState } from 'react';
import FinalDestination from '../FinalDestination/FinalDestination';
import Map from '../Map/Map';

  
 
 const Destination = () => {
    const [pick, setPick] = useState(''); 
    const [drop, setDrop] = useState('');  
    
     
  
  

     return (
        <div className="row" style={{color:"#007BFF"}}  >
      <form class="card col-lg- col-md-3 col-sm-12">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Pickup Location</label>
          <input type="text" className="form-control" id="pickupLocation" aria-describedby="emailHelp" placeholder="Example:Mirpur" onChange={e => setPick(e.target.value)} />
         
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Drop Location</label>
          <input type="text" className="form-control" id="dropLocation" placeholder="Example:Mitojheel" onChange={e => setDrop(e.target.value)} />
        </div>
        
        <button type="submit" className=" mb-2 btn btn-block btn-primary"> Search</button>
      </form>

     <div className=" col-lg-9 col-md-9 col-sm-12" >
       <Map></Map>
     </div>
     
</div>
 

     );
 };
 
 export default Destination;