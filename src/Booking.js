import React from "react";


const Booking = ({number, location, service }) => {
	

  return (
	  <div id="bookingcard">
		  <h4>No.of dogs: {number}</h4>
		  <hr />
		  <h4>Service: {service}</h4>
		  <hr />
			 <h5>Location: { location}</h5>
		  </div>
  );
};

export default Booking;

