
import React,{ useState} from "react";
import Dog from "./Dog"
import DogForm from "./DogForm";

const DogList = ({ dogBreeds, onDeleteDog, onAddDog}) => {

  const [ showForm, setShowForm ] = useState(false)
//contact pop up
  function handlePopUp() {
    return alert(`${"Call us on : 0796225100"}\n\n ${"Email: infor@dogsmarket.co.ke"}`)
  }
  const productsArray = dogBreeds.map((dog) => {
    return (
      <Dog
        dog={dog}
        key={dog.id}
        breed={dog.breed}
        image={dog.image}
        price={dog.price}
        onDeleteDog={onDeleteDog}
      />
    );
  });
  // a fucntion to hide/show form to submit posts
  function handleShowForm() {
    setShowForm((showForm) => !showForm)
  }
  

  return (
    <div className="doglist-container">
      <h3 id="heading">Classic Breeds That Never Go Out Of Fashion</h3>
      <header id="doglist-header">
        <div>
          <h3>Buy the breed of your choice </h3> 
          <h4>as low as ksh. 10,000 💵</h4>
          <h4>We'll deliver to you freely and offer free medical checkup</h4>
        </div>
      </header>
      <main>
        <div className="dogcards-container">
          <div id="dogsale-btn"><button>Dogs For Sale</button> </div> 
          <div className="dogsale-headline"><h4>Dog Sellers Are Only Allowed To Post And Reach Out To Support Team To Give Out Their Contact Information</h4></div>
          <div className="dogcards">
          {productsArray}
          </div>
          <div className="buy-sell-btns">
          <div id="sell-btn"><button onClick={handleShowForm}> Click To Sell Your Dog</button>
          {showForm=== true ?  <DogForm onAddDog={onAddDog} />  : null}
          </div> 
          <div id="buy-btn"><button onClick={handlePopUp}> Request To Buy</button></div>
          </div>
        </div>
      </main>
      <footer id="footer">
          <p>infor@dogsmarket.co.ke</p>
          <p>Designed by : Michael Kaburu</p>
          <p>contact : +254796225100</p>
</footer>
		</div>
	 );
}
 
export default DogList;
