const horario = require('./teste.json');

async function ConverteHorario(time, timezone){
    if(timezone === "brt"){
        let horarioEEST = time + 6;
        let horarioPST = time - 4;
        const horariosConvertidos = ([{
            time: horarioEEST,
            timezone: "eest", 
        },{
            time: horarioPST,
            timezone: "pst",
        }])
        return JSON.stringify(horariosConvertidos);
    }
    if(timezone === "eest"){
        let horarioBRT = time - 6;
        let horarioPST = time - 10;
        const horariosConvertidos = ([{
            time: horarioBRT,
            timezone: "brt", 
        },{
            time: horarioPST,
            timezone: "pst",
        }])
        return JSON.stringify(horariosConvertidos);
    }
    if(timezone === "pst"){
        let horarioEEST = time + 10;
        let horarioBRT = time + 4;
        const horariosConvertidos = ([{
            time: horarioEEST,
            timezone: "eest", 
        },{
            time: horarioBRT,
            timezone: "brt",
        }])
        return JSON.stringify(horariosConvertidos);
    }
}

console.log(ConverteHorario(horario.time, horario.timezone));