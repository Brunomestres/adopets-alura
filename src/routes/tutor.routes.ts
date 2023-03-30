import { Router } from 'express'
import { TutorController } from '../controller/tutorController'
const tutorRoutes = Router()
const tutorController = new TutorController()

tutorRoutes.post('/', tutorController.create)
tutorRoutes.get('/', tutorController.find)
tutorRoutes.get('/:id', tutorController.findOne)
tutorRoutes.delete('/:id', tutorController.delete)
tutorRoutes.patch('/:id', tutorController.update)


export { tutorRoutes }