import express from "express";
const router = express.Router();
import * as taskController from "../app/controllers/taskController.js";
import  authMiddleware from "../app/middlewares/authMiddleware.js";
import * as FeaturesController from "../app/controllers/FeaturesController.js"
// Request params & query string

router.get("/",taskController.boni)
router.post("/examplePOST",taskController.amin )

router.get("/fet1/TokenEncode", FeaturesController.TokenEncode)
router.get("/fet2/TokenDecode", FeaturesController.TokenDecode)

router.get("/abc",authMiddleware)

// Route Middleware


export default router;