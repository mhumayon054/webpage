import "./App.css";
import React from "react";
// import { MuiDrawer } from "./MuiDrawer";
import Drawer from "./components/drawer";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <div className="icon">
            <Drawer />
            <button className="btn1">Ashion</button>
          </div>
          <div>
            <button className="btn">Home</button>
            <button className="btn">Women's</button>
            <button className="btn">Men's</button>
            <button className="btn">Shop</button>
            <button className="btn">Pages</button>
            <button className="btn">Blog</button>
            <button className="btn">Contact</button>
          </div>
          <div>
            <button className="btn2">Login/Register</button>
          </div>
        </header>
        <div className="subContainer">
          <div className="leftcontainer">
            <text className="txt1">Women's Fashion</text>
            <br></br>
            <text>
              Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
              incidid- <br></br>unt labore edolore magna aliquapendisse ultrices
              gravida
            </text>
            <br></br>
            <a href="">SHOP NOW</a>
          </div>
          <div className="rightcontainer">
            <div className="arcontainer">
              <div className="acontainer">
                <text className="txt2">Men's Fashion</text>
                <text>358 items</text>
                <br></br>
                <a href="">SHOP NOW</a>
              </div>
              <div className="bcontainer">
                <text className="txt2">Kid's Fashion</text>

                <text>273 items</text>
                <br></br>
                <a href="">SHOP NOW</a>
              </div>
            </div>
            <div className="brcontainer">
              <div className="ccontainer">
                <text className="txt2">Cosmetics</text>

                <text>159 items</text>
                <br></br>
                <a href="">SHOP NOW</a>
              </div>
              <div className="dcontainer">
                <text className="txt2">Acessories</text>

                <text>792 items</text>
                <br></br>
                <a href="">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom header">
          <div className="btn4">NEW PRODUCT</div>
          <div className="Alltxt">
            <button className="txt3">All</button>
            <button className="txt3">Women's</button>
            <button className="txt3">Men's</button>
            <button className="txt3">Kid's</button>
            <button className="txt3">Acessories</button>
            <button className="txt3">Cosmetics</button>
          </div>
        </div>
        <div className="parentcontainer">
          <div className="container1"></div>
          <div className="container2"></div>
          <div className="container3"></div>
          <div className="container4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
