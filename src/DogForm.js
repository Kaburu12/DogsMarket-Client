import React from "react";
import { useState } from "react";


const DogForm = ({ onAddDog }) => {
  //constant values that hold the state values to be posted
  const [image, setImage] = useState("");
  const [breed, setBreed] = useState("");
  const [price, setPrice] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
    //a constant that holds new dog data to be posted
    const dogCard = {
      image: image,
      breed: breed,
      price: price,
    };

    //posting dog data using our fetch API
    fetch("http://localhost:9292/dogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dogCard),
    })
      .then((r) => r.json())
      //new posted dog
      .then((newDog) => onAddDog(newDog));
    
    
    
  }
  return (
    <div>
      <div id="form-header">
      </div>
      <div id="form-container">
        <form className="dogform" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="image"
		  name="image"
		  value={image}
			onChange={(e) => setImage(e.target.value)} />
			<input
		  type="text"
		  placeholder="breed"
		  name="breed"
		  value={breed}
					  onChange={(e) => setBreed(e.target.value)} />		
				<input
		  type="text"
		  placeholder="price"
		  name="price"
		  value={price}
		 onChange={(e) => setPrice(e.target.value)} />	
		  <button type="submit">Post</button>  
			</form>
			</div>
	    </div>
	 );
}
 
export default DogForm;

