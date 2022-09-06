import React from "react";

const DogList = () => {

  return (
    <div className="doglist-container">
      <h3 id="heading">Classic Breeds That Never Go Out Of Fashion</h3>
      <header id="doglist-header">
        <div>
          <h3>Buy the breed of your choice </h3> 
          <h4>as low as ksh. 7,000 💵</h4>
          <h4>We'll deliver to you freely and offer free medical checkup</h4>
        </div>
      </header>
      <main>
        <div className="dogcards-container">
         <div id="dogsale-btn"><button>Dogs For Sale</button> </div> 
          <div className="dogcards">
          <div id="dogcard">
            <img src="http://www.dogsforsale.co.in/wp-content/uploads/2018/06/pomeranian.jpg" />
            <h4> Pomeranian</h4>
            <h5>ksh.20,000</h5>
            </div>
            <div id="dogcard">
            <img src="http://www.dogsforsale.co.in/wp-content/uploads/2018/06/pomeranian.jpg" />
            <h4> Pomeranian</h4>
            <h5>ksh.20,000</h5>
            </div>
            <div id="dogcard">
            <img src="http://www.dogsforsale.co.in/wp-content/uploads/2018/06/pomeranian.jpg" />
            <h4> Pomeranian</h4>
            <h5>ksh.20,000</h5>
            </div>
            <div id="dogcard">
            <img src="http://www.dogsforsale.co.in/wp-content/uploads/2018/06/pomeranian.jpg" />
            <h4> Pomeranian</h4>
            <h5>ksh.20,000</h5>
            </div>
          </div>
          <div id="sell-btn"><button> Click To Sell Your Dog</button>
          </div> 
        </div>
</main>
		</div>
	 );
}
 
export default DogList;