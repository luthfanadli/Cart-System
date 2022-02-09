const express = require('express');
const router = express.Router();
const errorHandler = require('../middlewares/errorHandler')


router.use('/carts', )
// router.use('/products', )

router.use(errorHandler)

module.exports = router