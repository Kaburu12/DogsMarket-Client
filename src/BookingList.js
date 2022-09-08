
import React,{ useState} from "react";
import Booking from "./Booking"
import BookingForm from "./BookingForm";

const BookingList = ({ bookings, onAddBooking ,onUpdateBooking}) => {

  const [ showForm, setShowForm ] = useState(false)

  const bookingArray = bookings.map((booking) => {
    return (
      <Booking
        booking={booking}
        key={booking.id}
        name={booking.name}
        service={booking.service}
			place={booking.place}
        onUpdateBooking={onUpdateBooking}
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
    
      <main>
        <div className="bookingcards-container">
          <div className="bookingcards">
          {bookingArray}
          </div>
          <div id="book-btn"><button onClick={handleShowForm}> Book Now</button>
					  {showForm === true ? <BookingForm onAddBooking={onAddBooking}
						  onUpdateBooking={onUpdateBooking} /> : null}
          </div> 

        </div>
      </main>
      {/* <footer id="footer">
          <p>infor@dogsmarket.co.ke</p>
          <p>Designed by : Michael Kaburu</p>
          <p>contact : +254796225100</p>
</footer> */}
		</div>
	 );
}
 
export default BookingList;
