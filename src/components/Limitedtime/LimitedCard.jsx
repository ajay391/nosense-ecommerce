import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {BiSolidRightArrow} from 'react-icons/bi';
import {BiSolidLeftArrow} from 'react-icons/bi';

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        {/* <i className='fa fa-angle-right'></i> */}
        <i><BiSolidRightArrow/></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        {/* <i className='fa fa-angle-left'></i> */}
        <i><BiSolidLeftArrow/></i>
      </button>
    </div>
  )
}
const LimitedCard = ({ productItems, addToCart }) => {
  // const [count, setCount] = useState(0)
  // const increment = () => {
  //   setCount(count + 1)
  // }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, /* Show 4 slides on larger screens */
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3, 
    //     }
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1, 
    //     }
    //   }
    // ]
  };
  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItem) => {
          return (
            <div className='box__product' key={productItem.id}>
              <div className='limited-product'>
                <img src={productItem.imgUrl} alt="" />
                  {/* <span className='discount'>{productItems.discount}% Off</span> */}
                {/* <h3>{productItems.name}</h3> */}
               
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default LimitedCard
