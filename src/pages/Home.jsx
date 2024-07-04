import React , {useState , useEffect} from 'react'
import axios from 'axios';
import { Container , Row , Col } from 'reactstrap';
import { Link } from 'react-router-dom';
// import {motion} from "framer-motion"
import Helmet from '../components/Helmet/Helmet';

import '../styles/home.css'
import popular from '../assets/data/popular';
import ProductList from '../components/ProductList/ProductList';
import LimitedTime from '../components/Limitedtime/LimitedTime';

import SliderHome from '../components/Slider/Slider';
import ThreeDSlider from '../components/ThreeDSlider/ThreeDSlider';

import {BiSolidUpArrow} from 'react-icons/bi'
// import {FiArrowUpRight} from 'react-icons/fi'
// import { FaArrowRightLong } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";

import {BiShoppingBag} from 'react-icons/bi'
import {PiArrowsCounterClockwiseFill} from 'react-icons/pi'
import {FiTruck} from 'react-icons/fi'
import {BiSolidOffer} from 'react-icons/bi'

import about1 from '../assets/images/about_1.webp';
import about2 from '../assets/images/about2.webp';

import userIcon from "../assets/images/user-icon.png"

// import { Carousel } from '3d-react-carousal' ;
import Data from "../components/Limitedtime/Data"
import FlashDeals from '../components/flashDeals/FlashDeals';

const Home = () => {

  const shop = '/shop';
  
  // const [data, setData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false); // New state to track data fetching
  
  const [data, setData] = useState(popular);

  useEffect(()=>{
    const popularProducts = popular.filter((item) => item.type === 'popular');

    setData(popularProducts)
  },[]);
  
  // useEffect(() => {
  //   // Fetch data from Django backend only if it hasn't been fetched yet
  //   if (!dataFetched) {
  //     fetchData();
  //   }
  // }, [dataFetched]); // Depend on dataFetched state
  
  // -------------------------------------- api call code ---------------------
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('http://127.0.0.1:8000/api/products/');
  //     setData(response.data);
  //     setDataFetched(true); // Mark data as fetched
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  // --------------------------------
  // const fetchData = async () => {
  //   try {
  //     // Simulate fetching data from an API
  //     // Replace this with your dummy data
  //     const dummyData = [
  //       { id: 1, name: 'Dummy Product 1', price: 10 },
  //       { id: 2, name: 'Dummy Product 2', price: 20 },
  //       { id: 3, name: 'Dummy Product 3', price: 30 },
  //     ];
      
  //     // Set the dummy data as the response
  //     setData(dummyData);
  //     setDataFetched(true); // Mark data as fetched
  //     console.log(dummyData);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // const [data, setData] = useState(popular);

  // useEffect(()=>{
  //   const popularProducts = popular.filter((item) => item.type === 'popular');

  //   setData(popularProducts)
  // },[]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check whether the button should be visible
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  // Instagram image array
  // let slides = [
  //   <img  src={img1} alt="1" />,
  //   <img  src={img2} alt="2" />  ,
  //   <img  src={img3} alt="3" />  ,
  //   <img  src={img4} alt="4" />  ,
  //   <img  src={img5} alt="5" />  
  // ];

  // const year =new Date().getFullYear()
  return (
    <Helmet title={"Home"}>
      {/* <section className="hero__section" >
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">Trending products in {year}</p>
                <h2>Make Your Clothing More Attractive.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <motion.button whileTap={{scale:1.2}} className='buy__btn'><Link to='/shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>
            
          </Row>
        </Container>
      </section> */}
    
      <SliderHome/>
     
      <FlashDeals />
      
      {/* about */}

      <section className='about__us__section'>
       
        <Row className='gx-0'>
          <Col lg='6' md='6' className='about__col__1' style={{ backgroundImage: `url(${about1})`}}>
            
          </Col>
          <Col lg='6' md='6' className='about__col__2' style={{ backgroundImage: `url(${about2})`}}>
            <div className='about__div'>
              <h1 className='about__heading'>Summer Collection 2024</h1>
              <p className='about__paragraph'>"Step into the sunshine with our latest summer styles."</p>
              <a className="fancy" href="/home">
                <span className="top-key"></span>
                <span className="text">Check It Out</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </a>

            </div>
          </Col>

        </Row>
        
      </section>

      {/* about */}

      <section className="trending__items" >
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">Popular Items</h2>
              <p className="p-2 mb-3">Stay ahead of the fashion curve with our newest collections.</p>
            </Col>
            <Col lg='12' className='text-end'>
              <Link to={shop} className='popular__view__all'><span>View All</span></Link>
            </Col>
            <ProductList data={data}/>
            {/* <ProductList /> */}
          </Row>
        </Container>
      </section>



      {/* Limited */}

      {/* <section className='limited__time'>

        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">Trending Item</h2>
            </Col>
            <Col>
              <LimitedTime/>
            </Col>

          </Row>
        </Container>
        
      </section> */}

      {/* Limited */}

      {/* new trending */}

      {/* Limited */}

      <section className='limited__time'>

        <LimitedTime/>
        
      </section>

      {/* Limited */}





      {/* send review */}
      <section className="insta__sec">

        <Container fluid>
          <Row className='insta__row gx-0' style={{}}>
          
            <Col lg='12' md='12' className='follow_on_insta' >
              <div className="insta__card">
                <h2 className="title">Follow Us On Instagram</h2>
                
                <div className="insta__actions ">
                  {/* <div className="insta_img_followers">
                    <img className="insta__usericon" src={userIcon} alt="" />
                    <div className='insta_name_count'>
                      <h6>nosense</h6>
                      <p>12k followers</p>
                    </div>
                  </div> */}
                 
                 <a className='instal_follow_btn' href='https://instagram.com/nosense_studio?igshid=MzRlODBiNWFlZA=='>Follow <span className="follow-arrow"><BsArrowRight /></span> </a>
                </div>
              </div>
            </Col>
            <Col md='12' className="d-flex justify-content-center align-items-center">
              <div className="insta__container">
                {/* <Carousel slides={slides} autoplay={false} interval={4000} arrows={false}/> */}
               <ThreeDSlider/>
              </div>
            </Col>
          </Row>
        </Container>

      </section>
      {/* send review */}

      {/* banner */}
      <section className="banner__section">


      <Row className=' gx-0' style={{}}>
      <div className="card-container-main">
          
          <div className="card-grid-container">
            <div className="grid-card">
              
              <h2><BiSolidOffer /></h2>
              <h3>Trendy outfits at unbeatable costs.</h3>
              <p>Discover unbeatable deals on trendy outfits that effortlessly combine style and savings.</p>
            </div>
            <div className="grid-card">
              
              <h2><FiTruck /></h2>
              <h3>Free delivery Above 1000</h3>
              <p>Enjoy the added convenience of free delivery on orders above 1000.</p>
            </div>
            <div className="grid-card">
              
              <h2><PiArrowsCounterClockwiseFill /></h2>
              <h3>14 days return</h3>
              <p>Shop now - returns made easy with 14 days to decide!</p>
            </div>
            <div className="grid-card">
              
              <h2><BiShoppingBag /></h2>
              <h3>Shop Now for Instant Savings!</h3>
              <p>Unlock instant savings by shopping with us today!</p>
            </div>
          </div>
        </div>
        
        {/* <Col lg='3' md='3' >
          <div  className='banner__content'>
            <BiShoppingBag className='banner__icon'/>
           
            <h4>Trendy outfits at unbeatable costs.</h4>
          </div>
        </Col>

        <Col lg='3' md='3' className='' >
          <div  className='banner__content'>
          <FiTruck className='banner__icon'/>
            <h4>Free delivery Above 1000</h4>
          </div>
          
        </Col>
        <Col lg='3' md='3' className='' >
          <div  className='banner__content'>
          <TbTruckReturn className='banner__icon'/>
            <h4>14 days return</h4>
          </div>
          
        </Col>
        <Col lg='3' md='3' className='' >
        <div  className='banner__content'>
        <BiSolidOffer className='banner__icon'/>
          <h4>Shop Now for Instant Savings!</h4>
        </div>
          
        </Col> */}
      </Row>


      </section>
      {/* banner end */}
          

      {/* review */}
      {/* <section className="reviews">

        <Container>
          <Row>
          <Col lg='12' className='text-center'>
              <h2 className="section__title">Top Reviews</h2>
            </Col>
            <Col lg='4' md='4' className='' >
            <div className="cookie-card">
                  <span className="title">username</span>
                  <p className="description">proin gravida nibh vel velit auctor aliquet. aenean sollicitudin, nisi elit. </p>
                  <div className="actions">
                     
                  </div>
              </div>
            </Col>
          </Row>
        </Container>

      </section> */}
      {/* review */}

      {/* to top arrow start */}

      <div className='to-top-icon-section'>
        <button className={`to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}>
          <BiSolidUpArrow/>
        </button>
      </div>

       {/* to top arrow end */}
     
    </Helmet>
  )
}

export default Home