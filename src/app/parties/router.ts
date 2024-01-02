import * as express from "express"
import PartyControllers from './controller'
import uploadFile from "../../middlewares/uploadFile"

const router = express.Router()

router.post('/party', uploadFile.upload("image"), PartyControllers.create)
router.get('/party', PartyControllers.find)

export default router