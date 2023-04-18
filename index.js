function ConverteHorario(time, timezone){
    if(timezone === "brt"){
        let horarioEST = time - 1;
        let horarioPST = time - 5;
        const horariosConvertidos = ([{
            time: horarioEST,
            timezone: "est", 
        },{
            time: horarioPST,
            timezone: "pst",
        }])

        return horariosConvertidos;
    }
}

console.log(ConverteHorario(10, "brt"));