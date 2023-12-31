import {Request, Response} from "express"
import CandidateScheme from "./validator"
import CandidateServices from './service'

export default new class CandidateControllers {
    
    async create(req: Request, res: Response){
        try {
            const data = req.body

            const {error, value} = CandidateScheme.validate(data)
            
            if(error){
                res.status(400).json(error.details[0].message)
            }

            const response = await CandidateServices.create(value)
            
            res.status(200).json(response)
        } catch (error) {
            res.status(200).json({message: error.message})
        }
    }

    async getAll(req: Request, res: Response){
        try {
            const response = await CandidateServices.getAll()

            // console.log(response)

            res.status(200).json(response)
        } catch (error) {
            res.status(200).json({message: error.message})
        }
    }
}