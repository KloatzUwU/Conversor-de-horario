import ConverteHorario from "../../ConverteHorario.js";

class HoraAtualController {
    static ConverteAtual = (req, res) => {
        const data = new Date();
        const hora = data.getHours()
        const resultado = [({
            time: hora,
            timezone: "brt", 
        }), ...ConverteHorario(hora, "brt")];

        res.status(200).json(resultado);
    }
}

export default HoraAtualController;