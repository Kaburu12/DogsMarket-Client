
import React,{ useState} from "react";
import Booking from "./Booking"
import BookingForm from "./BookingForm";

const BookingList = ({ bookings, onAddBooking}) => {

	const [ showForm, setShowForm ] = useState(false);

  const bookingArray = bookings.map((booking) => {
    return (
      <Booking
        booking={booking}
        key={booking.id}
        number={booking.number}
        service={booking.service}
			location={booking.location}
      />
    );
  });
  // a fucntion to hide/show bookings form
  function handleShowForm() {
	  setShowForm((showForm) => !showForm)
  }
  

  return (
    <div className="bookings-container">
      <h3 id="bookings-head">Bookings History</h3>
		  <div id="profile">
			  <h2>👨</h2>
			  <h5>User</h5>
			  <h4>Mike Kaburu</h4>
	    </div>
      <main>
        <div className="bookingcards-container">
          <div className="bookingcards">
					  {bookingArray}	  
		</div>
				  
				  <div id="book-btn1"><button onClick={handleShowForm}> Book Now
				  </button>
					  {showForm === true ? <BookingForm onAddBooking={onAddBooking}
              
            /> : null}
          </div> 

        </div>
      </main>
		</div>
	 );
}
 
export default BookingList;
