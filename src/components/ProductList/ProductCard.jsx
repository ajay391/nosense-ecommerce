import React from 'react';

// import productImg from '../../assets/images/t1.png';
// import {IconContext} from "react-icons";
// import {BsFillEyeFill} from 'react-icons/bs'
// import { AiOutlineHeart } from "react-icons/ai";
// import {motion} from "framer-motion"
import './product-card.css';
import {Col} from 'reactstrap';

const ProductCard = ({item, colSize}) => {

    const djangoBaseUrl = process.env.REACT_APP_DJANGO_BASE_URL;

  return (
    <Col lg={colSize.lg} md={colSize.md} className='product__card__col ' >
        {/* style={{ backgroundImage: `url(${productImg})`}} */}
        <div className="product__item" >
            
        {/* <img src={`${djangoBaseUrl}${item.image}`} alt="" /> */}
        <img src={item.imgUrl} alt="" />
            
            <div className="overlay">
                <div className='button__container'>
                    {/* <button className='test__button-1'>
                        <IconContext.Provider value={{ className:"icon"}}>
                            <BsFillEyeFill />
                        </IconContext.Provider>
                    </button> */}
                    <button className='test__button-2'><i className="fa fa-heart-o"></i></button>
                    {/* <button className='test__button-3'><i className='fa fa-shopping-cart'></i></button> */}
                </div>
                
            </div>
            
        </div>
        <div className='popular__tshirt__name'>
            <div className='tshirt_details_div '>
                <h4 className="product__name">{item.productName}</h4>
                <p className='product__type'>{item.category}</p>
                <span className="tag"><span className='price__icon'>&#8377;</span>{item.price}</span>
            </div>
        </div>

    </Col>
  )
}

export default ProductCard