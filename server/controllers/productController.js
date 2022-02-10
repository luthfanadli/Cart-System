const { Product } = require('../models')

class ProductController {
    static async getProduct(req, res, next) {
        try {
            const getProduct = await Product.findAll()
            res.status(200).json(getProduct)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = ProductController;