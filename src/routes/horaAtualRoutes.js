import express  from "express";
import HoraAtualController from "../controllers/horaAtualController.js";

const router = express.Router();

router
    .get("/now", HoraAtualController.ConverteAtual)

export default router;