import React from "react";
function CategoryCard({ background = "pink", title = "", item = 0 }) {
  console.log("background>", background);
  return (
    <div style={{ backgroundColor: background }} className="acontainer">
      <text className="txt2">{title}</text>
      <text>{item} items</text>
      <br></br>
      <a href="">SHOP NOW</a>
    </div>
  );
}

export default CategoryCard;
