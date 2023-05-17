import PST from "../models/Pst.js";
import ConverteHorario from "../../ConverteHorario.js";

class PstController {
    static ConvertePST = (req, res) => {
        const horario = new PST(req.body);
        const resultado = ConverteHorario(horario.time, "pst") 
        if(resultado == "erro"){
            res.status(400).send("envie o horário no corpo da requisição")
        }else if(resultado == "erro2"){
            res.status(400).send("o horário passado não é valido, por favor utilize o sistema 24 horas")
        }else{
            res.status(200).json(resultado)
        }
    }
}

export default PstController;