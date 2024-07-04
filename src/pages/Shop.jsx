import React , {useState} from 'react'
import ProductList from '../components/ProductList/ProductList';
import { Container , Row , Col } from 'reactstrap';
import popular from '../assets/data/popular';

const Shop = () => {


  const [data, setData] = useState(popular);




  return (
    <>
    <div>Shop</div>

    <section className="trending__items" >
        <Container>
          <Row>
          <Col lg='10' md='10' className='follow_on_insta' >
          <Row>
            <ProductList data={data}/>
          </Row>
          </Col>
          <Col lg='2' md='2' className='follow_on_insta' >
          <div>Filter</div>
          </Col>
            {/* <ProductList /> */}
          </Row>
        </Container>
      </section>

  </>
  )
}

export default Shop