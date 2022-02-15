const express = require('express');
const router = express.Router();
const errorHandler = require('../middlewares/errorHandler')
const ProductController = require('../controllers/productController')
const CartController = require('../controllers/cartController')
const UserController = require('../controllers/userController')

router.get('/products', ProductController.getProduct)
router.get('/items', CartController.getItemsCart)
router.post('/carts', CartController.createCart)
router.post('/carts/:userId', CartController.addItemCart)
router.delete('/carts/:userId', CartController.deleteItemCart)
router.post('/user', UserController.addUser)

router.use(errorHandler)

module.exports = router;