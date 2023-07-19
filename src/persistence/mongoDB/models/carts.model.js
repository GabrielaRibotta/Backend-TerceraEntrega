import mongoose from "mongoose";

const cartsSchema = new mongoose.Schema({
    products: {
        type: [
            {
                id_product: {
                    type: Schema.Types.ObjectId,
                    ref: "products"
                },
                quantity: Number
            }
        ],
        default: []
    }
})

export const cartsModel = mongoose.model('Carts', cartsSchema)