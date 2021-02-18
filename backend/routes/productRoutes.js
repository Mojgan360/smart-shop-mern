import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'

const asyncHandler = require('express-async-handler')
// @desc  GET all products
// @route /api/products
// @access public
router.get('/api/products', (req, res) => {
  res.json(products)
})

// @desc  GET single products
// @route /api/products/:id
// @access public

router.get('/api/products/:slug', (req, res) => {
  const product = products.find((p) => p._id === req.params.slug)
  res.json(product)
})

export default productRoutes
