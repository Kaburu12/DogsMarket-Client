import React from "react";


const Dog = ({ dog, name, image, price ,onDeleteDog,onUpdateDog}) => {
	
	function handleDeleteClick() {
		fetch(`https://server-app123.herokuapp.com/order/${dog.id}`, {
		  method: "DELETE",
		})
		.then((r) => r.json())
		.then(() => onDeleteDog(dog));
	  }

	
	//   function handleUpdate() {
	// 	// Call onUpdateItem, passing the data returned from the fetch request
	// 	fetch(`https://server-app123.herokuapp.com/order/${dog.id}`, {
	// 	 method: "PATCH",
	// 	 headers: {
	// 	   "Content-Type": "application/json",
	// 	 },
	// 	 body: JSON.stringify({
	// 		 name: name,
	// 		 image: image,
	// 		 price: price,
	// 	 }),
	//    })
	//    .then((r) => r.json())
	//    .then((updatedDog) => onUpdateDog(updatedDog));
	//   }
	
	
  return (
	  <div id="dogcard">
		  <div><button id="delete" onClick={handleDeleteClick}>❎</button></div> 
		  {/* <div><button id="update" onClick={handleUpdate}>edit</button></div>  */}
			  <img src={ image} alt="" />
			  <h4>{ name}</h4>
			  <h5>{ price}</h5>
		  </div>
  );
};

export default Dog;

