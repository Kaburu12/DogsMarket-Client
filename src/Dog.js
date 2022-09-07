import React from "react";


const Dog = ({ dog, name, image, price ,onDeleteDog}) => {
	
	function handleDeleteClick() {
		fetch(`https://server-app123.herokuapp.com/order/${dog.id}`, {
		  method: "DELETE",
		})
		.then((r) => r.json())
		.then(() => onDeleteDog(dog));
	  
	  }

  return (
	  <div id="dogcard">
		   <div><button id="delete" onClick={handleDeleteClick}>❎</button></div> 
			  <img src={ image} alt="" />
			  <h4>{ name}</h4>
			  <h5>{ price}</h5>
		  </div>
  );
};

export default Dog;

