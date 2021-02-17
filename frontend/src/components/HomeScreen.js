import React from 'react'
import Product from './Product'
import products from '../products'
import { Container, Row, Col } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row sm={12} md={6} lg={4} xl={3}>
        {products.map((product) => (
          <Col key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
