import express from "express";
import padrao from "../routes/defaultRoutes.js"
import now from "../routes/horaAtualRoutes.js"
import Brt from "../routes/brtRoutes.js";
import Eest from "../routes/eestRoutes.js";
import Pst from "../routes/pstRoutes.js";

const routes = (app) => {
    app.use(
        express.json(),
        padrao,
        now,
        Brt,
        Eest,
        Pst
    )
}

export default routes; 
