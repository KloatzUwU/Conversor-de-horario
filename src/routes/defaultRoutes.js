import express from "express";
import PadraoController from "../controllers/defaultController.js";

const router = express.Router();

router
    .get("", PadraoController.FuncionamentoAPI)

export default router;
