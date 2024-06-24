import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// import {BsArrowRightShort} from 'react-icons/bs';

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-angle-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-angle-left'></i>
        {/* <i><BsArrowRightShort/></i> */}
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {
  // const [count, setCount] = useState(0)
  // const increment = () => {
  //   setCount(count + 1)
  // }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, /* Show 4 slides on larger screens */
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, /* Show 3 slides on medium-sized screens */
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, /* Show 1 slide at a time on mobile */
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItem) => {
          return (
            <div className='box'>
              <div className='product mtop' style={{backgroundImage: `url(${productItem.cover})`}}>
                  {/* <span className='discount'>{productItem.discount}% Off</span> */}

                  <div class="card-info">
                    <h3>{productItem.name}</h3>
                  </div>
               
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
