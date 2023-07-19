import { Router } from "express";
import { productsController } from '../controllers/products.controller.js'

const productsRouter = Router()

productsRouter.get('/', productsController.findAllProducts)
productsRouter.get('/:idProduct', productsController.findOneProduct)
productsRouter.post('/', productsController.createOneProduct)
productsRouter.delete('/', productsController.deleteOneProduct)

export default productsRouter