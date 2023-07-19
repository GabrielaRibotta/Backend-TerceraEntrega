import { Router } from "express";
import { cartsController } from '../controllers/carts.controller.js'

const cartsRouter = Router()

cartsRouter.get('/', cartsController.createOneCart)
cartsRouter.get('/:idCart', cartsController.findOneCart)
cartsRouter.post('/:idProduct', cartsController.deleteOneProduct)
cartsRouter.delete('/:idCart', cartsController.deleteAllProducts)

export default cartsRouter