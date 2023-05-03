import express from "express";
import Brt from "../routes/brtRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({horario: "teste"})
    })

    app.use(
        express.json(),
        Brt
    )
}

export default routes; 