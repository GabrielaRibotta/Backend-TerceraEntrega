import { CartsService, cartsService } from '../services/carts.services.js'

class CartsController {
    async findOneCart(req, res){
        const {idCart} = req.params
        try {
            const cart = await cartsService.findOneCart(idCart)
            res.status(200).json({message: 'Cart', cart})
        } catch (error) {
            res.status(500).json({message: 'Error', error})
        }
    }

    async createOneCart(req, res){
        try {
            const newCart = await cartsService.createOneCart()
            res.status(200).json({message: 'Cart created', newCart})
        } catch (error) {
            res.status(500).json({message: 'Error', error})
        }
    }

    async deleteOneProduct(req, res){
        const {idProduct} = req.params
        try {
            const product = await cartsService.deleteOneProduct(idProduct)
            res.status(200).json({message: 'Product deleted', product})
        } catch (error) {
            res.status(500).json({message: 'Error', error})
        }
    }

    async deleteAllProducts(req, res){
        try {
            const {idCart} = req.params
            const emptyCart = await cartsService.deleteAllProducts(idCart)
            res.status(200).json({message: 'Cart empty', emptyCart})
        } catch (error) {
            res.status(500).json({message: 'Error', error})
        }
    }
}

export const cartsController = new CartsController()