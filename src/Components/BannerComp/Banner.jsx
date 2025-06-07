import React from 'react'
import { Carousel } from 'react-bootstrap'
import FirstImage from "/31and32r react/MyReactProject/ReactProject/src/assets/img3.png"
import Secimage from "/31and32r react/MyReactProject/ReactProject/src/assets/img1.png"
import ThirdImage from "/31and32r react/MyReactProject/ReactProject/src/assets/img2.png"
import "./Banner.css"
const Banner = () => {
  return (
    <div>  
        {/* <h1>ddfghj</h1> */}
        <Carousel  style={{alignItems:"center",justifyContent:"center",color:"black", margin:"2%"}} >
      <Carousel.Item>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
               <img src={FirstImage}alt="" />
        </div>
        {/* <ExampleCarouselImage text="First slide" /> */}
     
        <Carousel.Caption>
              </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

<img src={Secimage} alt="" />
</div>
        <Carousel.Caption>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

      <img src={ThirdImage}>
   
      </img>
      </div>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

 </div>
  )
}

export default Banner
