import React from "react"
import FlashCard from "./FlashCard"
import "./FlashDeals.css"
import { Container , Row , Col } from 'reactstrap';

import Data from "./Data"

const FlashDeals = () => {

  const {productItems}  = Data
  return (
    <>
      <section className='flash'>
      <Col lg='12' className='text-center'>
        <h2 className="p-2 mb-4">Explore Our Collections</h2>
        {/* <p className="p-2 mb-3">Explore our latest collection and discover the best styles for this season.</p> */}
      </Col>
        <div className='container-fluid'>
          <div className='heading f_flex'>
            {/* <i className='fa fa-bolt'></i> */}
            {/* <h1 className="category_heading"></h1> */}
          </div>
          <FlashCard productItems={productItems}  />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
