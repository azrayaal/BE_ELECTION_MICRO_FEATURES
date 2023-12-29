import * as express from "express"
import NewsControllers from './controller'

const router = express.Router()

router.post('/news', NewsControllers.create)
router.get('/news', NewsControllers.find)
router.get('/news/:id', NewsControllers.getDetail)

export default router