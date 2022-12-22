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
    </div>
  );
}

export default App;
