import { productsModel } from '../mongoDB/models/products.model.js'

class ProductsMongo {
    async findAll(){
        try {
            const response = await productsModel.find()
            return response
        } catch (error) {
            return error
        }
    }

    async findOneById(id){
        try {
            const response = await productsModel.findOneById(id)
            return response
        } catch (error) {
            return error
        }
    }

    async createOne(obj){
        try {
            const response = await productsModel.create(obj)
            return response
        } catch (error) {
            return error
        }
    }

    async deleteOne(id){
        try {
            const response = await productsModel.deleteOne(id)
        } catch (error) {
            return error
        }
    }
}

export const productsMongo = new ProductsMongo()