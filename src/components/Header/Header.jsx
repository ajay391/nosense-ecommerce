import React , {useRef , useEffect} from 'react'
import { Container, Row } from 'reactstrap'
import { NavLink } from "react-router-dom"

import logo from "../../assets/images/eco-logo.jpeg"
import userIcon from "../../assets/images/user-icon.png"

import {motion} from "framer-motion"

import "./header.css"

const nav__link =[
    {
        path:"/home",
        display: "Home"

    },
    {
        path:"/shop",
        display: "Shop"

    },
    {
        path:"/cart",
        display: "Cart"

    }
]

const Header = () => {

    const headerRef = useRef(null);

    const menuRef = useRef(null);

    const stickyHeaderFunction = ()=>{
        window.addEventListener('scroll', ()=>{
            if(
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80 ){
                headerRef.current.classList.add('stickey__header')
            } else{
                headerRef.current.classList.remove('stickey__header')
            }
        })
    }
    useEffect(() => {
      stickyHeaderFunction();

      return() => window.removeEventListener("scroll", stickyHeaderFunction)
    })

    const menuToggle = () => menuRef.current.classList.toggle('active__menu')


  return <header className='header'  ref={headerRef}>
    <Container>
        <Row>
            <div className="nav__wrapper" >
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <div>
                        <h1>NOSENSE</h1>
                        {/* <p>Since 1992</p> */}
                    </div>
                </div>

                <div className="navigation" ref={menuRef} onClick={menuToggle}>
                    <ul className="menu">
                       {nav__link.map((item ,index) =>(
                        <li className="nav__item" key={index}>
                            <NavLink to={item.path} className={(navClass)=> navClass.isActive ? 'nav__active':''}>{item.display}</NavLink>
                        </li>

                        ))}
                    </ul>

                </div>

                <div className="nav__icons">
                    <span className="fav__icon">
                        <i className="ri-heart-line"></i>
                        <span className='badge'>1</span>
                    </span>
                    <span className="cart__icon">
                        <i className="ri-shopping-bag-line"></i>
                        <span className='badge'>1</span>
                    </span>
                    {/* <span><motion.img whileTap={{scale:1.2}} src={userIcon} alt="" /></span> */}

                    <div className="mobile__menu">
                        <span onClick={menuToggle}><i className="ri-menu-line"></i></span>
                    </div>
                </div>

               
            </div>
        </Row>

    </Container>

  </header>
}

export default Header