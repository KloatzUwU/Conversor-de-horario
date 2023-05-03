import PST from "../models/Pst.js";
import ConverteHorario from "../../ConverteHorario.js";

class PstController {
    static ConvertePST = (req, res) => {
        const horario = new PST(req.body);
        const resultado = ConverteHorario(horario.time, horario.timezone) 
        res.status(200).json(resultado)
    }
}

export default PstController;