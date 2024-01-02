import {Request, Response} from "express"
import ArticleServices from "./service"
import ArticleSchema from "./validator"


export default new class ArticleControllers {

    async create(req: Request, res: Response){
        try {
            const data = req.body

            const {error, value} = ArticleSchema.validate(data)

            if(error){
                return (
                    res.status(400).json(error.details[0].message)
                )
            }

            const response = await ArticleServices.create(value)
            res.status(200).json(response)

        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async find(req: Request, res: Response){
        try {
            const Article = await ArticleServices.find()

            res.status(200).json(Article)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    async getDetail(req: Request, res: Response){
        try {
            const id = req.params.id

            const detail = await ArticleServices.getDetail(id)

            res.status(200).json(detail)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}