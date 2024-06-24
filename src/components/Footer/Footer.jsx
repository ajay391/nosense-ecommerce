import React from 'react'

import { MdLocationOn , MdEmail } from 'react-icons/md';

import './footer.css'
import {Container , Row , Col , ListGroup , ListGroupItem } from "reactstrap"
import { Link } from 'react-router-dom'

// import logo from "../../assets/images/eco-logo.png"

const Footer = () => {

  const year =new Date().getFullYear()

  return <footer className="footer">
    <Container>
      <Row>
        <Col lg="4">
          <div className="footer__logo">
            {/* <img src={logo} alt="logo" /> */}
            <div>
              <h4 className='footer__name text-white'>Nosense</h4>
            </div>

          </div>
          <p className="footer__text mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, distinctio! Corporis mollitia impedit laboriosam quod et itaque suscipit, quis tenetur neque, aut obcaecati laudantium molestias doloribus ut delectus necessitatibus dolorem.
          </p>
        </Col>
        <Col lg="3">
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Top Categories</h4>
            <ListGroup>

              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">Oversized T-shirt</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">T-shirt</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">Printed shirt</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">Jeans</Link>
              </ListGroupItem>

            </ListGroup>
          </div>
        </Col>
        <Col lg="2">
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Useful Links</h4>
            <ListGroup>

              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">Shop</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">Cart</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">Login</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">Privacy Policy</Link>
              </ListGroupItem>

            </ListGroup>
          </div>
        </Col>
        <Col lg="3">
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Contact</h4>
            <ListGroup className='footer__contact'>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span>
                  <MdLocationOn/>
                </span>
                <p>Kochi, India</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span>
                  <i className="fa fa-phone"></i>
                </span>
                <p>+91 77392-48393</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2' >
                <span>
                  <MdEmail/>
                </span>
                <p>nosense@gmail.com</p>
              </ListGroupItem>

            </ListGroup>
          </div>
        </Col>
        <Col lg="12">
          <p className="footer__copyright">
            Copyright {year} developed by NOSENSE. All rights reserved.
          </p>
        </Col>
        
      </Row>
    </Container>
  </footer>
}

export default Footer