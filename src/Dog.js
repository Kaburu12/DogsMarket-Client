import React from "react";


const Dog = ({ dog, breed, image, price ,onDeleteDog}) => {
	
	function handleDeleteClick() {
		fetch(`http://localhost:9292/dogs/${dog.id}`, {
		  method: "DELETE",
		})
		.then((r) => r.json())
		.then(() => onDeleteDog(dog));
	  }

  return (
	  <div id="dogcard">
		  <div><button id="delete-icon" onClick={handleDeleteClick}>❎</button></div> 
			  <img src={ image} alt="" />
			  <h4>{ breed}</h4>
			  <h5>{ price}</h5>
		  </div>
  );
};

export default Dog;

