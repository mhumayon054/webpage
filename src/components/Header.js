import React from "react";
import Drawer from "./drawer";
import Navtab from "./Navtab";
function App() {
  const MyContext = React.createContext();

  return (
    <div>
      <header className="head">
        <Drawer />
        <div className="icon">
          <button className="btn1">Ashion</button>
        </div>
        {/* <nav> */} {/* <div className="wrapper"> */}
        {/* <div className="logo"></div> */}
        <ul className="nav-links">
          <li>
            <a href="#">Category </a>
            <div className="mega-box">
              <div className="content">
                <div className="row">
                  <header>Email Services</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Personal Email</a>
                    </li>
                    <li>
                      <a href="#">Business Email</a>
                    </li>
                    <li>
                      <a href="#">Mobile Email</a>
                    </li>
                    <li>
                      <a href="#">Web Marketing</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <header>Security Services</header>
                    <li>
                      <a href="#">Site Seal</a>
                    </li>
                    <li>
                      <a href="#">VPS Hosting</a>
                    </li>
                    <li>
                      <a href="#">Privacy Seal</a>
                    </li>
                    <li>
                      <a href="#">Website Design</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <header>Design Services</header>
                    <li>
                      <a href="#">Graphics</a>
                    </li>
                    <li>
                      <a href="#">Vectors</a>
                    </li>
                    <li>
                      <a href="#">Business Cards</a>
                    </li>
                    <li>
                      <a href="#">Custom logo</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
        {/* </div> */}
        {/* </nav> */}
        <Navtab title="HOME WOMEN'S MEN'S SHOP PAGES BLOG CONTACT" />
        <div>
          <button className="btn2">Login/Register</button>
        </div>
      </header>
    </div>
  );
}
export default App;
