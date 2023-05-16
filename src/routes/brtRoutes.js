import express  from "express";
import BrtController from "../controllers/brtController.js";

const router = express.Router();

router
    .get("/brt", BrtController.ConverteBRT)

export default router;
