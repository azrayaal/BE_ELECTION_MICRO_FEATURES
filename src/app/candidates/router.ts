import * as express from 'express'
import CandidateControllers from './controller'


const router = express.Router()

router.post('/candidate', CandidateControllers.create)
router.get('/candidate', CandidateControllers.getAll)

export default router