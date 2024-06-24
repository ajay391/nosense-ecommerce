import React from "react"
import LimitedCard from "./LimitedCard"
import "./LimitedTime.css"

import {BsFillEyeFill} from 'react-icons/bs'
import {IconContext} from "react-icons";

import {BsStarFill} from 'react-icons/bs'
import {BsStarHalf} from 'react-icons/bs'
import {FaArrowRight} from 'react-icons/fa'

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
// import {BsStar} from 'react-icons/bs'

import { Row , Col } from 'reactstrap';

import Data from "./Data"



import productImg from '../../assets/images/trending/bannerImg.jpg';

const LimitedTime = () => {

  const {productItems}  = Data
  return (
    <>
      <section className='flash-trend'>
        <div className=''>
{/*           
          <div className='heading f_flex justify-content-center '>
            <p className="category_heading ">proin gravida nibh vel velit auctor aliquet. aenean sollicitudin, lorem quis bibendum auctor, nisi elit.</p>
          </div> */}

          <Row className="trending__row">
            <Col md='6' className='trending-col-2' style={{ backgroundImage: `url(${productImg})` , backgroundPosition:'center' , backgroundSize:'cover' }}>
              <div className="limited__tshirt__details">
                
                {/* <h2 className="trending-text">𝔗𝔯𝔢𝔫𝔡𝔦𝔫𝔤 𝔑𝔬𝔴</h2> */}
                <h2 className="trending-text">Trending Now</h2>

            </div>
            </Col>
            <Col md='6' className="trending-col-2 d-flex justify-content-center align-items-center flex-column">

              <Col md="12" className='mb-5'>
              
              <h1 className="mb-2">Captain America: Super Soldier</h1>
              <p>Oversized T-shirt</p>
              </Col>
              <div className="card__container mb-4">
                <LimitedCard productItems={productItems}  />
              </div>

              <Col md="12">

              {/* <p className="mb-2">Tshirt</p> */}

              <p className="mb-2"><span className='price__icon'>&#8377;</span>679</p>
              <p className="trending__stars">
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarHalf/>

              </p>

              <div className="d-flex gap-2 mt-3">
                <button className="limited__view__btn" data-tooltip="View item">
                  <span className="btn__top">
                    <IconContext.Provider value={{ className:"icon"}}>
                    <BsFillEyeFill />
                    </IconContext.Provider>

                  </span>
                  <span className="btn__top">
                    <IconContext.Provider value={{ className:"icon__go"}}>
                    <FaArrowRight />
                    </IconContext.Provider>

                  </span>
                </button>
                <button className="limited__view__btn" data-tooltip="View item">
                  <span className="btn__top">
                    <IconContext.Provider value={{ className:"icon"}}>
                    <FaHeart />
                    </IconContext.Provider>

                  </span>
                  <span className="btn__top">
                    <IconContext.Provider value={{ className:"icon__go"}}>
                    <FaRegHeart />
                    </IconContext.Provider>

                  </span>
                </button>
                
                <button className="limited__cart__btn"><span className="text">add to cart</span><span>Now!</span></button>

              </div>
           
              </Col>
            
            </Col>
           

          </Row>

          {/* <div className="main__container">
            <div className="card__container">
              <LimitedCard productItems={productItems}  />
            </div>
            <div className="limited__tshirt__details">
              <p>$99</p>
              <h2>Marvel</h2>

              <p className="limited__desc">proin gravida nibh vel velit auctor aliquet. aenean sollicitudin, lorem quis bibendum auctor, nisi elit.</p>

              <button>add to cart</button>

            </div>

          </div> */}
        </div>
      </section>
    </>
  )
}

export default LimitedTime
