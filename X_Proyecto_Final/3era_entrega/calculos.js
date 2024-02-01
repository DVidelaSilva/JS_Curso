// ------------------- FUNCIONES CALCULOS LONGITUD --------------------

function calcCentimetro (input){

    let resultado = (input * 100);
    let msg_cen = input + " metros [m] ------> " + resultado + " centimetros [cm]"
    return msg_cen;

}

function calcMilimetro (input){

    let resultado = (input * 1000);
    let msg_mili = input + " metros [m] ------> " + resultado + " milimetros [mm]" 
    return msg_mili;

}

function calcKilometro (input){

    let resultado = (input / 1000);
    let msg_km = input + " metros [m] ------> " + resultado + " kilometros [km]" 
    return msg_km;

}

function calcPulgada (input){

    let resultado = ((input * 100) / 2.54);
    let msg_pulgada = input + " metros [m] ------> " + resultado + " Pulgadas [in]"  
    return msg_pulgada;

}

function calcMillas (input){

    let resultado = ((input / 1000) / 1.609344);
    let msg_millas = input + " metros [m] ------> " + resultado + " Millas [ml]"  
    return msg_millas;

}

function calcPie (input){

    let resultado = ((input * 100) / 30.48);
    let msg_pie = input + " metros [m] ------> " + resultado + " Pies [ft]"  
    return msg_pie;

}


// ------------------- FUNCIONES CALCULOS MASA --------------------

function calcgramo (input){

    let resultado = (input * 1000);
    let msg_gr = input + " Kilogramos [Kg] ------> " + resultado + " Gramos [g]"
    return msg_gr;

}

function calcmiligramo (input){

    let resultado = (input / 1000000);
    let msg_miligr = input + " Kilogramos [Kg] ------> " + resultado + " MiliGramos [mg]" 
    return msg_miligr;

}

function calctonelada (input){

    let resultado = (input / 1000);
    let msg_ton = input + " Kilogramos [Kg] ------> " + resultado + " Toneladas [t]" 
    return msg_ton;

}

function calcLibra (input){

    let resultado = (input * 2.205);
    let msg_libra = input + " Kilogramos [Kg] ------> " + resultado + " Libras [lb]" 
    return msg_libra;

}

function calcOnza (input){

    let resultado = (input * 35.274);
    let msg_onza = input + " Kilogramos [Kg] ------> " + resultado + " Onzas [oz]"
    return msg_onza;

}


// ------------------- FUNCIONES CALCULOS TIEMPO --------------------

function calcMin (input){

    let resultado = (input * 60);
    let msg_min = input + " Horas [Hrs] ------> " + resultado + " Minutos [m]"
    return msg_min;

}

function calcSeg (input){

    let resultado = (input * 3600);
    let msg_seg = input + " Horas [Hrs] ------> " + resultado + " Segundos [s]"
    return msg_seg;

}

function calcMiliseg (input){

    let resultado = (input * 3600000);
    let msg_miliseg = input + " Horas [Hrs] ------> " + resultado + " Milisegundos [ms]"
    return msg_miliseg;

}



// ------------------- FUNCIONES CALCULOS TEMPERATURA --------------------

function calcFahren (input){

    let resultado = ((input * 1.8) + 32);
    let msg_fahren = input + " Grados Celcius [ºC] ------> " + resultado + " Fahrenheit [ºF]"
    return msg_fahren;

}

function calcKelvin (input){

    let resultado = ((input * 1) + 273.15);
    let msg_kelvin = input + " Grados Celcius [ºC] ------> " + resultado + " Kelvin [ºK]"
    return msg_kelvin;

}



// ------------------- FUNCIONES CALCULOS TEMPERATURA --------------------

function calcPascal (input){

    let resultado = (input * 100000);
    let msg_pascal = input + " Bar [bar] ------> " + resultado + " Pascal [P]"
    return msg_pascal;

}

function calcAtmosfera (input){

    let resultado = (input * 0.987);
    let msg_atm = input + " Bar [bar] ------> " + resultado + " Atmosfera [atm]"
    return msg_atm;

}
