import React from "react"
import SlideCard from "./SlideCard"

import './Slider.css'
// import bgimag from '../../assets/images/jacket.png'

const SliderHome = () => {
  return (
    <>
      <section className='homeSlide contentWidth' >
        <div className=''>
          <SlideCard />
        </div>
      </section>
    </>
  )
}

export default SliderHome
