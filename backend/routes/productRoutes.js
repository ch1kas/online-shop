const express = require('express');
const router = express.Router();

const {getAllProducts, getProductById} = require('../controller/productControllers');

// GET all the products from db
// GET /api/products
router.get('/', getAllProducts)

// GET a product by id from db
// GET /api/product/:id
router.get('/:id', getProductById)

module.exports = router;
