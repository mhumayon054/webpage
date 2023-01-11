import "./App.css";
import React from "react";
import Header from "./components/Header";
import CategoryCard from "./components/CategoryCard";
import MinHead from "./components/MinHead";
function App() {
  return (
    <div className="App">
      <Header />

      <div className="subContainer">
        <div className="leftcontainer">
          <text className="txt1">Women's Fashion</text>
          <br></br>
          <text>
            Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-{" "}
            <br></br>unt labore edolore magna aliquapendisse ultrices gravida
          </text>
          <br></br>
          <a href="">SHOP NOW</a>
        </div>
        <div className="rightcontainer">
          <CategoryCard
            background="sea green"
            title="men's Fashion"
            item={212}
          />
          <CategoryCard
            background="rgb(187, 182, 182)"
            title="kid's Fashion"
            item={310}
          />
          <CategoryCard
            background="rgb(250, 210, 217)"
            title="women's Fashion"
            item={10}
          />
          <CategoryCard background="sea green" />
        </div>
      </div>
      <div className="bottom header">
        <MinHead />
      </div>
      <div className="parentcontainer">
        <div className="pc1">
          {" "}
          <div className="container1"></div>
          <div className="txtpc1">
            Button Tweed Blazer<br></br> $ 59.0
          </div>
        </div>
        <div className="pc2">
          {" "}
          <div className="container2"></div>
          <div className="txtpc2">
            Flowy Striped Skirt<br></br> $ 49.0
          </div>
        </div>
        <div className="pc3">
          <div className="container3"></div>
          <div className="txtpc3">
            Cotton T-Shirt <br></br> $ 59.0
          </div>
        </div>
        <div className="pc4">
          <div className="container4"></div>
          <div className="txtpc4">
            Slim Stripped Pocket Shirt<br></br> $ 59.0
          </div>
        </div>
      </div>
      <div className="prntcon2">
        <div className="pc5">
          <div className="con5"></div>
          <div className="txtcon5">
            Fit micro corduroy shirt<br></br> $ 59.0
          </div>
        </div>
        <div className="pc6">
          <div className="con6"></div>
          <div className="txtcon6">
            Tropical Kimono <br></br>$ 49.0{" "}
          </div>
        </div>
        <div className="pc7">
          <div className="con7"></div>
          <div className="txtcon7">
            Contrasting sunglasses <br></br>$ 59.0
          </div>
        </div>
        <div className="pc8">
          <div className="con8"></div>
          <div className="txtcon8">
            Water resistant backpack<br></br> $ 49.0
          </div>
        </div>
      </div>
      <div className="LearnMore">
        <button className="LM">Learn More</button>
      </div>
      <div className="design">
        <button className="BUTTON">
          THE CHLOE COLLECTION<br></br> <br></br>THE PROJECT JACKET<br></br>
          <br></br>SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default App;
