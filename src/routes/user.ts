import exress, { Request, Response } from 'express'
import user from '../controllers/user'

const router = exress.Router()

router.get('/', user.getUser)
router.get('/:id', user.getUserById)
router.post('/', user.postUser)
router.put('/', user.updateUser)
router.delete('/', user.deleteUser)

export default router