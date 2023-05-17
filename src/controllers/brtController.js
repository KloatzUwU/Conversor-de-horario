import BRT from "../models/Brt.js";
import ConverteHorario from "../../ConverteHorario.js";

class BrtController {
    static ConverteBRT = (req, res) => {
        const horario = new BRT(req.body);
        const resultado = ConverteHorario(horario.time, "brt")
        if(resultado == "erro"){
            res.status(400).send("envie o horário no corpo da requisição")
        }else if(resultado == "erro2"){
            res.status(400).send("o horário passado não é valido, por favor utilize o sistema 24 horas")
        }else{
            res.status(200).json(resultado)
        }
    }
}

export default BrtController;