function ConverteHorario(time, timezone){
    if(timezone === "brt"){
        if(time >= 0 && time < 4){
            let horaVariavel;
            time == 0 ? horaVariavel = 4 : horaVariavel;
            time == 1 ? horaVariavel = 3 : horaVariavel;
            time == 2 ? horaVariavel = 2 : horaVariavel;
            time == 3 ? horaVariavel = 1 : horaVariavel;
            let horarioPST = 24 - horaVariavel;
            let horarioEEST = time + 6;
            const horariosConvertidos = ([{
                time: horarioEEST,
                timezone: "eest", 
            },{
                time: horarioPST,
                timezone: "pst",
            }])
            return horariosConvertidos;
        }else if(time >= 4 && time <= 17){
            let horarioEEST = time + 6;
            let horarioPST = time - 4;
            const horariosConvertidos = ([{
                time: horarioEEST,
                timezone: "eest", 
            },{
                time: horarioPST,
                timezone: "pst",
            }])
            return horariosConvertidos;
        }
        if (time >= 18 && time <= 23){
            let horaVariavel;
            time == 18 ? horaVariavel = 24 : horaVariavel;
            time == 19 ? horaVariavel = 23 : horaVariavel;
            time == 20 ? horaVariavel = 22 : horaVariavel;
            time == 21 ? horaVariavel = 21 : horaVariavel;
            time == 22 ? horaVariavel = 20 : horaVariavel;
            time == 23 ? horaVariavel = 19: horaVariavel;

            let horarioPST = time - 4;
            let horarioEEST = 24 - horaVariavel;
            const horariosConvertidos = ([{
                time: horarioEEST,
                timezone: "eest", 
            },{
                time: horarioPST,
                timezone: "pst",
            }])
            return horariosConvertidos;
        }
    }
    if(timezone === "eest"){
        let horarioBRT = time - 6;
        let horarioPST = time + 2;
        const horariosConvertidos = ([{
            time: horarioBRT,
            timezone: "brt", 
        },{
            time: horarioPST,
            timezone: "pst",
        }])
        return horariosConvertidos
    }
    if(timezone === "pst"){
        let horarioEEST = time - 2;
        let horarioBRT = time + 4;
        const horariosConvertidos = ([{
            time: horarioEEST,
            timezone: "eest", 
        },{
            time: horarioBRT,
            timezone: "brt",
        }])
        return horariosConvertidos;
    }
}

export default ConverteHorario; 