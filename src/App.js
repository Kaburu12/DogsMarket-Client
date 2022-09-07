import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import DogList from "./DogList";
import NavBar from "./NavBar";
import Home from "./Home";
import Services from "./Services";

function App() {
  const [dogs, setDogs] = useState([]);

    //fectching dogs to be displayed
    useEffect(() => {
      fetch("https://server-app123.herokuapp.com/products")
        .then((res) => res.json())
        .then((dogs) => setDogs(dogs));
    }, []);
  
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
      <Route path="/doglist" element={<DogList onAddDog={handleAddDog}   dogBreeds={dogs} onDeleteDog={ handleDeleteDog} />}/>
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services/>} />
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
