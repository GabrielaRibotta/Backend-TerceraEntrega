import { usersModel } from '../mongoDB/models/users.model.js'

class UsersMongo {
    async findAll(){
        try {
            const response = await usersModel.find()
            return response
        } catch (error) {
            return error
        }
    }

    async findOneById(id){
        try {
            const response = await usersModel.findOneById(id)
            return response
        } catch (error) {
            return error
        }
    }

    async createOne(user){
        try {
            const response = await usersModel.create(user)
            return response
        } catch (error) {
            return error
        }
    }

    async deleteOne(id){
        try {
            const response = await usersModel.deleteOne(id)
        } catch (error) {
            return error
        }
    }
}

export const usersMongo = new UsersMongo()