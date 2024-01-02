import * as express from 'express'
import AuthControllers from './controller'

const router = express.Router()

// router.post('/user', )
router.post('/auth/register', AuthControllers.register)

export default router