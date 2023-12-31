import {Request, Response} from "express"
import PartyServices from "./service"
import PartySchema from "./validator"

export default new class PartyControllers {

    async create(req: Request, res: Response) {
        try {
            const data = req.body

            const {error, value} = PartySchema.validate(data)

            if(error){
                res.status(400).json(error.details[0].message)
            }

            const response = await PartyServices.create(value)
            
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async find(req: Request, res: Response) {
        try {
            const response = await PartyServices.find()

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }

}