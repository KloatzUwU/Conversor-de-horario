import express  from "express";
import EestController from "../controllers/eestController.js";

const router = express.Router();

router
    .get("/eest", EestController.ConverteEEST)

export default router;