import BRT from "../models/Brt.js";
import ConverteHorario from "../../ConverteHorario.js";

class BrtController {
    static ConverteBRT = (req, res) => {
        const horario = new BRT(req.body);
        const resultado = ConverteHorario(horario.time, "brt") 
        res.status(200).json(resultado)
    }
}

export default BrtController;