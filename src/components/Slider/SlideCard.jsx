import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import './Slider.css'

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value) => {
          return (
            <>
            {/* style={{ backgroundImage: `url(${value.cover})`}} */}
              <div className='slide__box d_flex' key={value.id} style={{ backgroundImage: `url(${value.cover})`}} >   
                <div className='left'>
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className='btn-primary'>SHOP NOW</button>
                </div>
                {/* <div className=''>
                  <img src={value.cover} alt='' />
                </div> */}
              </div>
            </>
          )
        })}
      </Slider>
    
    </>
  )
}

export default SlideCard
