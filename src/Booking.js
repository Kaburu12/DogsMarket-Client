import React from "react";


const Booking = ({name, place, service }) => {
	


	
  return (
	  <div id="bookingcard">
		  <h4>{ name}</h4>
			  <h4>{ service}</h4>
			  <h5>{ place}</h5>
		  </div>
  );
};

export default Booking;

