import { Router } from "express";
import {registerUser,loginUser,logoutUser} from "../controller/auth.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import {verifyJWT} from "../middlewares/auth.middleware.js";

const router = Router();

router.post( "/signup", upload.single("avatar"), registerUser);
router.post("/signin", loginUser);
router.get("/logout", verifyJWT, logoutUser);

export default router;
