import * as express from "express"
import PartyControllers from './controller'

const router = express.Router()

router.post('/party', PartyControllers.create)
router.get('/party', PartyControllers.find)

export default router