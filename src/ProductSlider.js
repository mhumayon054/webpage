import React from "react";
import Carousel from "react-bootstrap/Carousel";
const ProductSlider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: 400 }}
            src="https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
          />
          <Carousel.Caption className="textscroller">
            Anything which you want
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: 400 }}
            src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
          />

          <Carousel.Caption className="textscroller">Outfits</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: 400 }}
            src="https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Third slide"
          />

          <Carousel.Caption className="textscroller">
            Cosmetics
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default ProductSlider;
