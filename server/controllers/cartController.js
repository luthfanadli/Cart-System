const { Cart, Product, CartProduct } = require('../models')

class CartController {
    static async addItemCart(req, res, next) {
        try {
            const { userId } = req.params
            const { productId } = req.body
            const userIdCart = await Cart.findOne({ where: { userId } })
            const cartId = userIdCart.id
            const addItemCart = await CartProduct.create({ cartId, productId: productId })
            res.status(201).json({
                message: `Added Item with id ${productId} to Cart`,
                addItemCart
            })
        } catch (err) {
            next(err)
        }
    }
    static async deleteItemCart(req, res, next) {
        try {
            const { userId } = req.params
            const { productId } = req.body
            const userIdCart = await Cart.findOne({ where: { userId } })
            const cartId = userIdCart.id
            const deleteProduct = await CartProduct.findOne({ where: { cartId, productId } })
            await CartProduct.destroy({ where: { id: deleteProduct.id } })
            res.status(200).json({ message: `Item with id ${productId} removed from cart ` })
        } catch (err) {
            next(err)
        }
    }
    static async getItemsCart(req, res, next) {
        try {
            const items = await CartProduct.findAll({ include: { model: Product } })
            res.status(200).json(items)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = CartController;