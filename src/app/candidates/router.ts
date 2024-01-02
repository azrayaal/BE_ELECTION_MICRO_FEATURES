import * as express from 'express'
import CandidateControllers from './controller'
import uploadFile from '../../middlewares/uploadFile'


const router = express.Router()

router.post('/candidate', uploadFile.upload("image"), CandidateControllers.create)
router.get('/candidate', CandidateControllers.getAll)

export default router