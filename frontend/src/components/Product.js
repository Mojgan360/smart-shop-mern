import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <div>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/products/${product._id}`}>
          <Card.Img variant='top' src={product.image} />
        </Link>
        <Card.Body>
          <Link to={`/products/${product._id}`}>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as='div'>
            <Rating
              stars={product.rating}
              review={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as='h3' className='my-3'>
            ${product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
