import React from 'react'
import FeaturedCar from '../cars/FeaturedCar'
import ScrollToTop from './ScrollToTop'
import ServiceCards from '../carServices/ServiceCards'
import Slider from './Slider'
const Home = () => {
  return (
    <>
      <Slider />
      <ServiceCards />
      <FeaturedCar />
      <ScrollToTop />
    </>
  )
}

export default Home
