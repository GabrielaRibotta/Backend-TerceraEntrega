import { cartsMongoMongo } from '../persistence/DAL/cartsMongo.js'

class CartsService {
    async findOneCart(id){
        try {
            const response = await cartsMongo.findOneById(id)
            return response
        } catch (error) {
            return error
        }
    }

    async createOneCart(){
        try {
            const response = await cartsMongo.createOne()
            return response
        } catch (error) {
            return error
        }
    }

    async addOneProduct(){
        try {
            const response = await cartsMongo.addOneProduct()
            return response
        } catch (error) {
            return error
        }
    }

    async deleteOneProduct(id){
        try {
            const response = await cartsMongo.deleteOneProduct(id)
            return response
        } catch (error) {
            return error
        }
    }

    async deleteAllProducts(id){
        try {
            const response = await cartsMongo.deleteAllProducts(id)
            return response
        } catch (error) {
            return error
        }
    }
}

export const cartsService = new CartsService()