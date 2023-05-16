import express from "express";
import Brt from "../routes/brtRoutes.js";
import Eest from "../routes/eestRoutes.js";
import Pst from "../routes/pstRoutes.js";

const routes = (app) => {
    app.use(
        express.json(),
        Brt,
        Eest,
        Pst
    )
}

export default routes; 
