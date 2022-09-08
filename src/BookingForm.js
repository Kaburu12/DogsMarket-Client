import React from "react";
import { useState } from "react";


const BookingForm = ({ onAddBooking ,onUpdateBooking}) => {
  //constant values that hold the state values to be posted
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [place, setPlace] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
    //a constant that holds new booking data to be posted
    const bookingCard = {
      name: name,
      service: service,
      place: place,
    };

    //posting booking data using our fetch API
    fetch("http://localhost:9292/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingCard),
    })
      .then((r) => r.json())
      //new posted booking
      .then((newBooking) => onAddBooking(newBooking));
    
    
	//   function handleUpdate() {
	// 	// Call onUpdateBooking, passing the data returned from the fetch request
	// 	fetch(`http://localhost:9292/bookings/${booking.id}`, {
	// 	 method: "PATCH",
	// 	 headers: {
	// 	   "Content-Type": "application/json",
	// 	 },
	// 	 body: JSON.stringify({
	// 		 name: name,
	// 		 service:service,
	// 		 place: place,
	// 	 }),
	//    })
	//    .then((r) => r.json())
	//    .then((updatedBooking) => onUpdateBooking(updatedBooking));
	//   }
	
  }
  return (
    <div>
      <div id="form-header">
      </div>
      <div id="form-container">
			  <form className="bookingform" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
		  name="name"
		  value={name}
			onChange={(e) => setName(e.target.value)} />
			<input
		  type="text"
		  placeholder="service"
		  name="service"
		  value={service}
					  onChange={(e) => setService(e.target.value)} />		
				<input
		  type="text"
		  placeholder="place"
		  name="place"
		  value={place}
		 onChange={(e) => setPlace(e.target.value)} />	
				  <button type="submit">Book</button>  
				{/* <button id="update" onClick={handleUpdate}>Update</button> */}
			</form>
			</div>
	    </div>
	 );
}
 
export default BookingForm;

