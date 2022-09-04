import React from 'react'
import { Carousel } from 'react-bootstrap'
import Slider1 from '../../assets/slider-1.jpg'
import Slider2 from '../../assets/slider-2.jpg'
import Slider3 from '../../assets/slider-3.jpg'
import '../../styles/SliderStyle.css'

const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={Slider1} alt="First slide" />
        <Carousel.Caption>
          <h3>Feel the Luxury</h3>
          <p>Float like a Cadillac, sting like a Beemer.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Slider2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Harden it</h3>
          <p>
            Hey, you're job's pretty easy today. Just stand there and let me
            look at'cha
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Slider3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Hendrix</h3>
          <p>Respect the Classics, Man! It's Hendrix!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
export default Slider
