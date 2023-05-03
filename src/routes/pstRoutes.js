import express  from "express";
import PstController from "../controllers/pstController";

const router = express.Router();

router
    .get("/pst", PstController.ConvertePST)

export default router;