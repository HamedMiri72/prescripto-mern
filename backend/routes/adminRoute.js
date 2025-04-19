import express from "express"
import { addDoctor } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import { adminLogin } from "../controllers/adminController.js";


const adminRouter = express.Router();


adminRouter.post("/add-doctor",upload.single('image'),addDoctor)
adminRouter.post("/login", adminLogin)

export default adminRouter