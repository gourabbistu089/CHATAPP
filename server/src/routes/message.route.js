import express from "express";
import { sendMessage , getMessages } from "../controller/message.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get('/:id', verifyJWT, getMessages)
router.post('/send/:id', verifyJWT, sendMessage)

export default router