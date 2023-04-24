import React from "react";
import Carousel from 'react-bootstrap/Carousel';


export default function Carousell() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            style={{height:'100vh',width:'70%',margin:'auto'}}
            src={require("../assets/card-img1.png")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block"
            style={{height:'100vh',width:'70%',margin:'auto'}}
            src={require("../assets/Cradle_logo.png")}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block"
            style={{height:'80vh',width:'70%',margin:'auto'}}
            src={require("../assets/cardImg2.png")}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
