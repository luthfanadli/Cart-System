const express = require('express');
const router = express.Router();
const errorHandler = require('../middlewares/errorHandler')
const ProductController = require('../controllers/productController')
const CartController = require('../controllers/cartController')

router.get('/products', ProductController.getProduct)
router.get('/items', CartController.getItemsCart)
router.post('/carts/:userId', CartController.addItemCart)
router.delete('/carts/:userId', CartController.deleteItemCart)

router.use(errorHandler)

module.exports = router;