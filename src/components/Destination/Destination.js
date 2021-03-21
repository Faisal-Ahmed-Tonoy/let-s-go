 import React, { useState } from 'react';
 import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
  
 
 const Destination = () => {
    const [search, setSearch] = useState(false);  
     
  
  

     return (
        <div style={{color:"#007BFF"}}  >
      <form class="card col-md-3">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Pickup Location</label>
          <input type="text" className="form-control" id="pickupLocation" aria-describedby="emailHelp" placeholder="Example:Mirpur" />
         
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Drop Location</label>
          <input type="text" className="form-control" id="dropLocation" placeholder="Example:Mitojheel" />
        </div>
        
        <button type="submit" className=" mb-2 btn btn-block btn-primary"onClick={() =>setSearch(!search)}>Search</button>
      </form>

     
     
</div>
 

     );
 };
 
 export default Destination;