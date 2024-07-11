import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList/ProductList';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem , Button } from 'reactstrap';
import shopData from '../assets/data/shop';

import '../styles/shop.css'

const Shop = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Latest');

  useEffect(() => {
    setData(shopData);
    setFilteredData(shopData);
  }, []);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  const handleFilter = (criteria) => {
    let sortedData = [...shopData];
    
    switch(criteria) {
      case 'Low Price to High':
        sortedData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'High Price to Low':
        sortedData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case 'Rating':
        sortedData.sort((a, b) => b.rating - a.rating);
        break;
      case 'Latest':
        sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        break;
    }

    
    setFilteredData(sortedData);
    setSelectedFilter(criteria);
  };

  return (
    <>

    <section className="shoping__list" >
        <Container >
          <Row>

        <div className='shop-page-url'>Home › Shop</div>

          </Row>
          <Row className="d-flex justify-content-end">
            
            {/* <Col >
              <Button onClick={() => setFilteredData(shopData)}>Reset Filter</Button>
              </Col> */}
            <Col className='filter-section'>
              <p>SHOWING 1–16 OF 607 RESULTS</p>


            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="custom-dropdown">
                <DropdownToggle caret className="custom-dropdown-toggle">
                  {selectedFilter}
                </DropdownToggle>
                <DropdownMenu className="custom-dropdown-menu">
                  <DropdownItem onClick={() => handleFilter('Latest')}>Latest</DropdownItem>
                  <DropdownItem onClick={() => handleFilter('Low Price to High')}>Low Price to High</DropdownItem>
                  <DropdownItem onClick={() => handleFilter('High Price to Low')}>High Price to Low</DropdownItem>
                  <DropdownItem onClick={() => handleFilter('Rating')}>Rating</DropdownItem>
                  
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
          <Col lg='12' md='12' className='' >
            <Row> 
              <ProductList  data={filteredData} colSize={{ lg: 3, md: 3 }}/>
            </Row>
          </Col>
          {/* <Col lg='2' md='2' className='follow_on_insta' >
          <div>Filter</div>
          </Col> */}
            {/* <ProductList /> */}
          </Row>
        </Container>
      </section>

  </>
  )
}

export default Shop