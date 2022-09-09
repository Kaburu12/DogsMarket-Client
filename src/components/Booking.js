import React from "react";


const Booking = ({ booking,number, location, service ,onUpdateBooking}) => {
	

	// function handleUpdate() {
	// 	// Call onUpdateBooking, passing the data returned from the fetch request
	// 	fetch(`http://localhost:9292/bookings/${booking.id}`, {
	// 	 method: "PATCH",
	// 	 headers: {
	// 	   "Content-Type": "application/json",
	// 	 },
	// 	 body: JSON.stringify({
	// 		 number: number,
	// 		 service:service,
	// 		 location: location,
	// 	 }),
	//    })
	//    .then((r) => r.json())
	//    .then((updatedBooking) => onUpdateBooking(updatedBooking));
	//   }
	
	  
		

	return (
		<div>
			<div id="bookingcard">
		  <h4>No.of dogs: {number}</h4>
		  <hr />
		  <h4>Service: {service}</h4>
		  <hr />
			 <h5>Location: { location}</h5>
		  </div>
			
	  </div>
	  
  );
};

export default Booking;

