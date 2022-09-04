import React from 'react'
// import FeaturedCar from "../cars/FeaturedCar";
import ScrollToTop from './ScrollToTop'
import Services from './Services'
import Slider from './Slider'
const Home = () => {
  return (
    <>
      <Slider />
      <Services />
      {/* <FeaturedCar /> */}
      <ScrollToTop />
    </>
  )
}

export default Home
