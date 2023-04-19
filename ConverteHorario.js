const horario = require('./teste.json');

async function ConverteHorario(time, timezone){
    if(timezone === "brt"){
        let horarioEST = time - 1;
        let horarioPST = time - 4;
        const horariosConvertidos = ([{
            time: horarioEST,
            timezone: "est", 
        },{
            time: horarioPST,
            timezone: "pst",
        }])
        return horariosConvertidos;
    }
    if(timezone === "est"){
        let horarioBRT = time + 1;
        let horarioPST = time - 3;
        const horariosConvertidos = ([{
            time: horarioBRT,
            timezone: "brt", 
        },{
            time: horarioPST,
            timezone: "pst",
        }])
        return horariosConvertidos;
    }
    if(timezone === "pst"){
        let horarioEST = time + 3;
        let horarioBRT = time + 4;
        const horariosConvertidos = ([{
            time: horarioEST,
            timezone: "est", 
        },{
            time: horarioBRT,
            timezone: "brt",
        }])
        return horariosConvertidos;
    }
}

console.log(ConverteHorario(horario.time, horario.timezone));