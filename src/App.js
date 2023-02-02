import "./App.css";
import React from "react";
import Header from "./components/Header";
import CategoryCard from "./components/CategoryCard";
import MinHead from "./components/MinHead";
import ProductSlider from "./ProductSlider";

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
      <div className="allmidcon">
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
        <ProductSlider />
      </div>
      <div className="productcategories">
        <div className="ppc1">
          <div className="wrapcon">HOT TREND</div>
          <div className="wrapcon1">
            <div className="box">
              <div className="smbox"></div>
            </div>
            <div className="catxt">
              <p>Chain Bucket Bag</p>
              <p>59$</p>
            </div>
          </div>
          <div className="wrapcon2">
            <div className="box">
              <div className="smbox"></div>
            </div>
            <div className="catxt">
              <p>Chain Bucket Bag</p>
              <p>59$</p>
            </div>
          </div>
          <div className="wrapcon3">
            {" "}
            <div className="box">
              <div className="smbox"></div>
            </div>
            <div className="catxt">
              <p>Chain Bucket Bag</p>
              <p>59$</p>
            </div>
          </div>
        </div>
        <div className="ppc2">
          <div className="wrapcon4">BEST SELLER</div>
          <div className="wrapcon5">
            {" "}
            <div className="box">
              <div className="smbox"></div>
            </div>
            <div className="catxt">
              <p>Chain Bucket Bag</p>
              <p>59$</p>
            </div>
          </div>
          <div className="wrapcon6">
            {" "}
            <div className="box">
              <div className="smbox"></div>
            </div>
            <div className="catxt">
              <p>Chain Bucket Bag</p>
              <p>59$</p>
            </div>
          </div>
          <div className="wrapcon7">
            {" "}
            <div className="box">
              <div className="smbox"></div>
            </div>
            <div className="catxt">
              <p>Chain Bucket Bag</p>
              <p>59$</p>
            </div>
          </div>
        </div>
        <div className="ppc3">
          <div className="wrapcon8">FEATURE</div>
          <div className="wrapcon9">
            {" "}
            <div className="box">
              <div className="smbox"></div>
            </div>
            <div className="catxt">
              <p>Chain Bucket Bag</p>
              <p>59$</p>
            </div>
          </div>
          <div className="wrapcon10">
            {" "}
            <div className="box">
              <div className="smbox"></div>
            </div>
            <div className="catxt">
              <p>Chain Bucket Bag</p>
              <p>59$</p>
            </div>
          </div>
          <div className="wrapcon11">
            {" "}
            <div className="box">
              <div className="smbox"></div>
            </div>
            <div className="catxt">
              <p>Chain Bucket Bag</p>
              <p>59$</p>
            </div>
          </div>
        </div>
      </div>
      <div className="timepic">
        <div className="lc">
          <img
            src="https://preview.colorlib.com/theme/ashion/img/discount.jpg"
            alt="girl"
          />
        </div>
        <div className="rc">
          {" "}
          <div className="circle">
            <p>DISCOUNT</p> <p>SUMMER 2019</p> <p>SALE 50%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
