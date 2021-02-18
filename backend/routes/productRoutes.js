import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'

import asyncHandler from 'express-async-handler'
// @desc  GET all products
// @route /api/products
// @access public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

// @desc  GET single products
// @route /api/products/:id
// @access public

router.get(
  '/:slug',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.slug)
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product Not Found!' })
    }
  })
)

export default router
