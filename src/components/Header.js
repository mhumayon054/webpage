import React from "react";
import Drawer from "./drawer";
import Navtab from "./Navtab";
function App() {
  return (
    <div>
      <header className="header">
        <Drawer />
        <div className="icon">
          <button className="btn1">Ashion</button>
        </div>
        <Navtab title="HOME WOMEN'S MEN'S SHOP PAGES BLOG CONTACT" />
        <div>
          <button className="btn2">Login/Register</button>
        </div>
      </header>
    </div>
  );
}
export default App;
