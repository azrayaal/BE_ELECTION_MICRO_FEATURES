import * as express from "express"
import ArticleControllers from './controller'

const router = express.Router()

router.post('/article', ArticleControllers.create)
router.get('/article', ArticleControllers.find)
router.get('/article/:id', ArticleControllers.getDetail)

export default router