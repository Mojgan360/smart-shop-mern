import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <div>
      <h2>Products</h2>
      <Card className='my-3 p-3 rounded'>
        <a href={`/products/${Product._id}`}>
          <Card.Img variant='top' src={product.image} />
        </a>
        <Card.Body>
          <a href={`/products/${Product._id}`}>
            {' '}
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
          <Card.Text>
            <Rating rating={product.rating} />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
