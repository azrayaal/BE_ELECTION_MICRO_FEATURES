import * as express from 'express'
import VoterControllers from './controller'


const router = express.Router()

router.post('/voter', VoterControllers.create)
router.get('/voters', VoterControllers.getAll)

export default router