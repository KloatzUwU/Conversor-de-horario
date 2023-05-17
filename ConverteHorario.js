function ConverteHorario(time, timezone){
    if(timezone === "brt"){
        if(time == null){
            return `erro`
        }
        if(time >= 24 || time < 0){
            return `erro2`
        }else {
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
    }

    if(timezone === "eest"){
        if(time == null){
            return `erro`
        }
        if(time >= 24 || time < 0){
            return `erro2`
        }else {
            if(time >= 18 && time <= 23){
                let horaVariavelBRT;
                let horaVariavelPST;
                time == 18 ? horaVariavelBRT = 12 : horaVariavelBRT;
                time == 19 ? horaVariavelBRT = 11 : horaVariavelBRT;
                time == 20 ? horaVariavelBRT = 10 : horaVariavelBRT;
                time == 21 ? horaVariavelBRT = 9 : horaVariavelBRT;
                time == 22 ? horaVariavelBRT = 8 : horaVariavelBRT;
                time == 23 ? horaVariavelBRT = 7 : horaVariavelBRT;

                time == 18 ? horaVariavelPST = 16 : horaVariavelPST;
                time == 19 ? horaVariavelPST = 15 : horaVariavelPST;
                time == 20 ?horaVariavelPST = 14 : horaVariavelPST;
                time == 21 ?horaVariavelPST = 13 : horaVariavelPST;
                time == 22 ? horaVariavelPST = 12 : horaVariavelPST;
                time == 23 ? horaVariavelPST = 11 : horaVariavelPST;
                let horarioPST = 24 - horaVariavelPST;
                let horarioBRT = 24 - horaVariavelBRT;
                const horariosConvertidos = ([{
                    time: horarioPST,
                    timezone: "pst", 
                },{
                    time: horarioBRT,
                    timezone: "brt",
                }])
                return horariosConvertidos;
            }else if(time >= 0 && time <= 17){
                let horaVariavelBRT;
                let horaVariavelPST;

                time == 0 ? horaVariavelBRT = 6 : horaVariavelBRT;
                time == 1 ? horaVariavelBRT = 5 : horaVariavelBRT;
                time == 2 ? horaVariavelBRT = 4 : horaVariavelBRT;
                time == 3 ? horaVariavelBRT = 3 : horaVariavelBRT;
                time == 4 ? horaVariavelBRT = 2 : horaVariavelBRT;
                time == 5 ? horaVariavelBRT = 1 : horaVariavelBRT;
                time == 6 ? horaVariavelBRT = 24 : horaVariavelBRT;
                time == 7 ? horaVariavelBRT = 23 : horaVariavelBRT;
                time == 8 ? horaVariavelBRT = 22 : horaVariavelBRT;
                time == 9 ? horaVariavelBRT = 21 : horaVariavelBRT;
                time == 10 ? horaVariavelBRT = 20 : horaVariavelBRT;
                time == 11 ? horaVariavelBRT = 19 : horaVariavelBRT;
                time == 12 ? horaVariavelBRT = 18 : horaVariavelBRT;
                time == 13 ? horaVariavelBRT = 17 : horaVariavelBRT;
                time == 14 ? horaVariavelBRT = 16 : horaVariavelBRT;
                time == 15 ? horaVariavelBRT = 15 : horaVariavelBRT;
                time == 16 ? horaVariavelBRT = 14 : horaVariavelBRT;
                time == 17 ? horaVariavelBRT = 13 : horaVariavelBRT;

                time == 0 ? horaVariavelPST = 10 : horaVariavelPST;
                time == 1 ? horaVariavelPST = 9 : horaVariavelPST;
                time == 2 ? horaVariavelPST = 8 : horaVariavelPST;
                time == 3 ? horaVariavelPST = 7 : horaVariavelPST;
                time == 4 ? horaVariavelPST = 6 : horaVariavelPST;
                time == 5 ? horaVariavelPST = 5 : horaVariavelPST;
                time == 6 ? horaVariavelPST = 4 : horaVariavelPST;
                time == 7 ? horaVariavelPST = 3 : horaVariavelPST;
                time == 8 ? horaVariavelPST = 2 : horaVariavelPST;
                time == 9 ? horaVariavelPST = 1 : horaVariavelPST;
                time == 10 ? horaVariavelPST = 24 : horaVariavelPST;
                time == 11 ? horaVariavelPST = 23 : horaVariavelPST;
                time == 12 ? horaVariavelPST = 22 : horaVariavelPST;
                time == 13 ? horaVariavelPST = 21 : horaVariavelPST;
                time == 14 ? horaVariavelPST = 20 : horaVariavelPST;
                time == 15 ? horaVariavelPST = 19 : horaVariavelPST;
                time == 16 ? horaVariavelPST = 18 : horaVariavelPST;
                time == 17 ? horaVariavelPST = 17 : horaVariavelPST;
                let horarioPST = 24 - horaVariavelPST;
                let horarioBRT = 24 - horaVariavelBRT;
                const horariosConvertidos = ([{
                    time: horarioPST,
                    timezone: "pst", 
                },{
                    time: horarioBRT,
                    timezone: "brt",
                }])
                return horariosConvertidos;
            }
        }
    }

    if(timezone === "pst"){
        if(time == null){
            return `erro`
        }
        if(time >= 24 || time < 0){
            return `erro2`
        }else{
            if(time >= 0 && time <= 23){
                let horaVariavelEEST;
                let horaVariavelBRT;
                time == 0 ? horaVariavelEEST = 14 : horaVariavelEEST;
                time == 1 ? horaVariavelEEST = 13 : horaVariavelEEST;
                time == 2 ? horaVariavelEEST = 12 : horaVariavelEEST;
                time == 3 ? horaVariavelEEST = 11 : horaVariavelEEST;
                time == 4 ? horaVariavelEEST = 10 : horaVariavelEEST;
                time == 5 ? horaVariavelEEST = 9 : horaVariavelEEST;
                time == 6 ? horaVariavelEEST = 8 : horaVariavelEEST;
                time == 7 ? horaVariavelEEST = 7 : horaVariavelEEST;
                time == 8 ? horaVariavelEEST = 6 : horaVariavelEEST;
                time == 9 ? horaVariavelEEST = 5 : horaVariavelEEST;
                time == 10 ? horaVariavelEEST = 4 : horaVariavelEEST;
                time == 11 ? horaVariavelEEST = 3 : horaVariavelEEST;
                time == 12 ? horaVariavelEEST = 2 : horaVariavelEEST;
                time == 13 ? horaVariavelEEST = 1 : horaVariavelEEST;
                time == 14 ? horaVariavelEEST = 24 : horaVariavelEEST;
                time == 15 ? horaVariavelEEST = 23 : horaVariavelEEST;
                time == 16 ? horaVariavelEEST = 22 : horaVariavelEEST;
                time == 17 ? horaVariavelEEST = 21 : horaVariavelEEST;
                time == 18 ? horaVariavelEEST = 20 : horaVariavelEEST;
                time == 19 ? horaVariavelEEST = 19 : horaVariavelEEST;
                time == 20 ? horaVariavelEEST = 18 : horaVariavelEEST;
                time == 21 ? horaVariavelEEST = 17 : horaVariavelEEST;
                time == 22 ? horaVariavelEEST = 16 : horaVariavelEEST;
                time == 23 ? horaVariavelEEST = 15 : horaVariavelEEST;

                time == 0 ? horaVariavelBRT = 20 : horaVariavelBRT;
                time == 1 ? horaVariavelBRT = 19 : horaVariavelBRT;
                time == 2 ? horaVariavelBRT = 18 : horaVariavelBRT;
                time == 3 ? horaVariavelBRT = 17 : horaVariavelBRT;
                time == 4 ? horaVariavelBRT = 16 : horaVariavelBRT;
                time == 5 ? horaVariavelBRT = 15 : horaVariavelBRT;
                time == 6 ? horaVariavelBRT = 14 : horaVariavelBRT;
                time == 7 ? horaVariavelBRT = 13 : horaVariavelBRT;
                time == 8 ? horaVariavelBRT = 12 : horaVariavelBRT;
                time == 9 ? horaVariavelBRT = 11 : horaVariavelBRT;
                time == 10 ? horaVariavelBRT = 10 : horaVariavelBRT;
                time == 11 ? horaVariavelBRT = 9 : horaVariavelBRT;
                time == 12 ? horaVariavelBRT = 8 : horaVariavelBRT;
                time == 13 ? horaVariavelBRT = 7 : horaVariavelBRT;
                time == 14 ? horaVariavelBRT = 6 : horaVariavelBRT;
                time == 15 ? horaVariavelBRT = 5 : horaVariavelBRT;
                time == 16 ? horaVariavelBRT = 4 : horaVariavelBRT;
                time == 17 ? horaVariavelBRT = 3 : horaVariavelBRT;
                time == 18 ? horaVariavelBRT = 2 : horaVariavelBRT;
                time == 19 ? horaVariavelBRT = 1 : horaVariavelBRT;
                time == 20 ? horaVariavelBRT = 24 : horaVariavelBRT;
                time == 21 ? horaVariavelBRT = 23 : horaVariavelBRT;
                time == 22 ? horaVariavelBRT = 22 : horaVariavelBRT;
                time == 23 ? horaVariavelBRT = 21 : horaVariavelBRT;

                let horarioEEST = 24 - horaVariavelEEST;
                let horarioBRT = 24 - horaVariavelBRT;
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
    }
}

export default ConverteHorario; 
