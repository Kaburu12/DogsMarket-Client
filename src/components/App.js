
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import DogList from "./DogList";
import NavBar from "./NavBar";
import Home from "./Home";
import Services from "./Services";

function App() {
  const [ dogs, setDogs ] = useState([]);
  const [ bookings, setBookings ] = useState([]);

  // add this callback function to update items inchart
  function handleUpdateBooking(updatedBooking) {
    const updatedBookings = bookings.map((booking) => {
      if (booking.id === updatedBooking.id) {
        return updatedBooking;
      } else {
        return booking;
      }
    });
    setBookings(updatedBookings);
   }


    //fectching dogs to be displayed
  
    useEffect(() => {
      fetch("http://localhost:9292/dogs")
        .then((res) => res.json())
        .then((dogs) => setDogs(dogs));
    }, []);
  
  //fectching bookigs
  useEffect(() => {
    fetch("http://localhost:9292/bookings")
      .then((res) => res.json())
      .then((bookings) => setBookings(bookings));
  }, []);
  

     //a function meant to update bookings state on adding new dogs
     function handleAddBooking(newBooking) {
      setBookings([ ...bookings, newBooking ]);
    
    }
  
  //function to delete dogs
    function handleDeleteDog(deleteDog) {
      const updatedDogs = dogs.filter((dog) => dog.id !== deleteDog.id);
    setDogs(updatedDogs);
    }
 
  
  //a function meant to update dogs state on adding new dogs
  function handleAddDog(newDog) {
    setDogs([ ...dogs, newDog ]);
    

  
  }
  return (
    <div>
    <NavBar />
    <Routes>
        <Route path="/doglist" element={<DogList
          onAddDog={handleAddDog}
          dogBreeds={dogs}
          onDeleteDog={handleDeleteDog}

        />} />
      <Route path="/doglist" element={<DogList />}/>
      <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services
            onAddBooking={handleAddBooking}
          bookings={bookings}
          onUpdate={handleUpdateBooking}
        />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;

