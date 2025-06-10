import React from 'react';
import { Carousel } from 'react-bootstrap';
import FirstImage from "/31and32r react/MyReactProject/ReactProject/src/assets/img3.png";
// import Secimage from "/31and32r react/MyReactProject/ReactProject/src/assets/img1.png";
import ThirdImage from "/31and32r react/MyReactProject/ReactProject/src/assets/img2.png";
import "./Banner.css";

import Img4 from "/31and32r react/MyReactProject/ReactProject/src/assets/Appimg4.png";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <Carousel className="banner-carousel">
        <Carousel.Item>
          <div className="carousel-image-wrapper">
            <img src={ThirdImage} alt="First slide" className="carousel-image" />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image-wrapper">
            <img src={FirstImage} alt="Second slide" className="carousel-image" />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image-wrapper">
            <img src={Img4} alt="Third slide" className="carousel-image" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
