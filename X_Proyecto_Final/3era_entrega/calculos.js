function calcCentimetro (input){

    let resultado = input * 100;
    let msg_cen = input + " metros [m] ------> " + resultado + " centimetros [cm]"
    return msg_cen;

}

function calcMilimetro (input){

    let resultado = input * 1000;
    let msg_mili = input + " metros [m] ------> " + resultado + " milimetros [mm]" 
    return msg_mili;

}

function calcKilometro (input){

    let resultado = input / 1000;
    let msg_km = input + " metros [m] ------> " + resultado + " kilometros [km]" 
    return msg_km;

}

function calcgramo (input){

    let resultado = input * 1000;
    let msg_gr = input + " Kilogramos [Kg] ------> " + resultado + " Gramos [g]"
    return msg_gr;

}

function calcmiligramo (input){

    let resultado = input / 1000000;
    let msg_miligr = input + " Kilogramos [Kg] ------> " + resultado + " MiliGramos [mg]" 
    return msg_miligr;

}

function calctonelada (input){

    let resultado = input / 1000;
    let msg_ton = input + " Kilogramos [Kg] ------> " + resultado + " Toneladas [t]" 
    return msg_ton;

}




