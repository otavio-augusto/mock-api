//IMPORTS ROUTER e CONTROLLER
import { Router } from 'express'
import { getUser, getUsers, putUser, postUser, deleteUser } from '../controllers/userController'

const userRouter = Router()

//ROTA GET SINGULAR
userRouter.get('/:id',
  getUser);

//ROTA GET PLURAL
userRouter.get('/',
  getUsers);

//ROTA POST
userRouter.post('/',
  postUser);

//ROTA PUT
userRouter.put('/',
  putUser);

//ROTA DELETE
userRouter.delete('/:id',
  deleteUser);

export default userRouter
