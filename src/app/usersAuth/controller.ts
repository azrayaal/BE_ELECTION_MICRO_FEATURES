import {Request, Response} from "express"
import AuthServices from './service'
import UserScheme from "./validator"

export default new class AuthControllers {
    
    async register(req: Request, res:Response){
        try {
            const data = req.body

            const {error, value} = UserScheme.validate(data)
            if(error){
                res.status(400).json(error.details[0].message)
            }
            const response = await AuthServices.register(value)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

}