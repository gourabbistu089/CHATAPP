import express from 'express'
import { verifyJWT } from '../middlewares/auth.middleware.js';
import {getUserForSideBar} from '../controller/user.controller.js'
const router = express.Router();

router.get('/', verifyJWT,  getUserForSideBar);

export default router