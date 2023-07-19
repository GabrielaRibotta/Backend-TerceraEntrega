import { productsService } from '../services/products.services.js'

class ProductsController {
    async findAllProducts(req, res){
        try {
            const allProducts = await productsService.findAllProducts()
            res.status(200).json({message: 'Users', allUsers})
        } catch (error) {
            res.status(500).json({message: 'Error', error})
        }
    }

    async findOneProduct(req, res){
        const {idProduct} = req.params
        try {
            const product = await productsService.findOneProduct(idProduct)
            res.status(200).json({message: 'User', user})
        } catch (error) {
            res.status(500).json({message: 'Error', error})
        }
    }

    async createOneProduct(req, res){
        const {title, description, code, price, status, stock, category, thumbnail} = req.body
        if(!title || !description || !code || !price || !status || !stock || !category || !thumbnail){
            res.status(401).json({message: 'Some data is missing'})
        }
        try {
            const newProduct = await productsService.createOneProduct(req.body)
            res.status(200).json({message: 'Product created', newProduct})
        } catch (error) {
            res.status(500).json({message: 'Error', error})
        }
    }

    async deleteOneProduct(req, res){
        const {idProduct} = req.params
        try {
            const product = await productsService.deleteOneProduct(idProduct)
            res.status(200).json({message: 'Product deleted', product})
        } catch (error) {
            res.status(500).json({message: 'Error', error})
        }
    }
}

export const productsController = new ProductsController()