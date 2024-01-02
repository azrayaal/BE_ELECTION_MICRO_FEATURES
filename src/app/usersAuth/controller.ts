import {Request, Response} from "express"
import AuthServices from './service'
import UserScheme from "./validator"

export default new class AuthControllers {
    
    async register(req: Request, res:Response){
        try {
            
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

}