import EEST from "../models/Eest.js";
import ConverteHorario from "../../ConverteHorario.js";

class EestController {
    static ConverteEEST = (req, res) => {
        const horario = new EEST(req.body);
        const resultado = ConverteHorario(horario.time, "eest") 
        res.status(200).json(resultado)
    }
}

export default EestController;