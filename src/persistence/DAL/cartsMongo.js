import { cartsModel } from '../mongoDB/models/carts.model.js'
import { productsModel } from '../mongoDB/models/products.model.js'

class CartsMongo {
    async findOneById(id){
        try {
            const response = await cartsModel.findOneById(id)
            return response
        } catch (error) {
            return error
        }
    }

    async createOne(){
        try {
            const response = await cartsModel.create()
            return response
        } catch (error) {
            return error
        }
    }
    async addOneProduct(id){
        try {
            let idCart = req.params.cid
            let idProduct = req.params.pid
            let productToAdd = await productsModel.findById({_id: idProduct})
            const deleteProduct = await cartsModel.push({_id: idCart}, productToAdd)
            return deleteProduct
        } catch (error) {
            return error
        }
    }
    async deleteOneProduct(id){
        try {
            let idCart = req.params.cid
            let idProduct = req.params.pid
            let productToDelete = await productsModel.findById({_id: idProduct})
            const deleteProduct = await cartsModel.deleteOne({_id: idCart}, productToDelete)
            return deleteProduct
        } catch (error) {
            return error
        }
    }

    async deleteAllProducts(id){
        try {
            let idCart = req.params.cid
            let deleteAllProducts = []
            const emptyCart = await cartsModel.replaceOne({_id: idCart}, deleteAllProducts)
            return emptyCart
        } catch (error) {
            return error
        }
    }
}

export const cartsMongo = new CartsMongo()