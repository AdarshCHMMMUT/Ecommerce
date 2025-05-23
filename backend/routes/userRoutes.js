import express from 'express'
import userAuth from '../middleware/userAuth.js';
import { getprofile, getUserData } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/data', userAuth, getUserData)
userRouter.get('/profile',getprofile)

export default userRouter;