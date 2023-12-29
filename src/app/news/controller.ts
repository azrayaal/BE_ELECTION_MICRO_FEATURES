import {Request, Response} from "express"
import NewsServices from "./service"

export default new class NewsControllers {

    async create(req: Request, res: Response){
        try {
            const data = req.body

            const response = await NewsServices.create(data)
            res.status(200).json(response)

        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async find(req: Request, res: Response){
        try {
            const news = await NewsServices.find()

            res.status(200).json(news)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}