import React,{ useState} from "react";
import BookingList from "./BookingList";

const Services = ({ onAddBooking, bookings }) => {
  const [ showList, setShowList ] = useState(false)

    // a fucntion to hide/show booking-list
    function handleShowBookingList() {
      setShowList((showList) => !showList)
    }
    
  
  return (
    <div>
      <header id="services-header">
        <div className="header-text">
        <h2>Get In Touch With Us</h2>
        <h3>We Offer Best Dog Services In Town</h3>
        </div>
        <h1> ⤋</h1>
      </header>
      <div className="services-container">
        <div>
          <img id="services" src="https://assets.petbacker.com/user-images/320/u_d2536a26b9.5f7ed737da344.jpg" alt="services" />
          <h3>Dog walking</h3>
          <h5>Ngong - Nairobi</h5>
          <h6>⭐ ⭐ ⭐ ⭐ ⭐ : 8 reviews</h6>
          <h5>I offer dog walking services <br />, reach support for my contacts</h5>
        </div>
        <div>
          <img id="services"  src="https://assets.petbacker.com/user-images/320/u_1a2ebdbcd5.613f3a4328a22.jpg" alt="daycare" />
          <h3>Dog grooming</h3>
          <h5>Ruiru - Nairobi</h5>
          <h6>⭐ ⭐ ⭐ ⭐ ⭐ : 4 reviews</h6>
          <h5>I offer grooming services <br /> to pets.</h5>
        </div>
        
        <div>
          <img id="services"  src="https://assets.petbacker.com/user-images/320/u_a5429036c4.5fece4184eb63.jpg" alt="grooming" />
          <h3>Dog daycare</h3>
          <h5>Embakasi - Nairobi</h5>
          <h6>⭐ ⭐ ⭐ ⭐ ⭐ : 12 reviews</h6>
          <h5>I offer affordable daycare <br /> services per day</h5>
        </div>
        <div>
          <img id="services"  src="https://assets.petbacker.com/user-images/320/u_7cb76a2d88.5fcb7841ccde5.jpg" alt="health" />
          <h3>Dog health check</h3>
          <h5>CBD - Nairobi</h5>
          <h6>⭐ ⭐ ⭐ ⭐ ⭐ : 10 reviews</h6>
          <h5>A doctor to your pet, holla me via <br /> contact support</h5>
        </div>
      </div>
      <div className="services-btn">
      <div id="book-btn"><button onClick={handleShowBookingList}> Click To Book Now</button>
					  {showList === true ? <BookingList onAddBooking={onAddBooking} bookings={bookings} /> : null}
          </div> 
      </div>
      <section>
  <footer id="footer">
          <p>infor@dogsmarket.co.ke</p>
          <p>Designed by : Michael Kaburu</p>
          <p>contact : +254796225100</p>
</footer>
</section>
	    </div>
	 );
}
 
export default Services;