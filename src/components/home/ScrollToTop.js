import React from 'react'
import '../../styles/ScrollButton.css'
import { BiUpArrowCircle } from 'react-icons/bi'

const ScrollToTop = () => {
  return (
    <div className="justify-content-center mt-5 pb-5">
      <h1 className="scrollBtn" onClick={() => window.scrollTo(0, 0)}>
        <BiUpArrowCircle />
      </h1>
    </div>
  )
}
export default ScrollToTop
