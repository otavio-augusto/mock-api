//IMPORTS ROUTER e CONTROLLER
import { Router } from 'express'
import { getTheme } from '../controllers/themeController.js'

const themeRouter = Router()

//ROTA GET SINGULAR
themeRouter.get('/:id',
  getTheme);

export default themeRouter
