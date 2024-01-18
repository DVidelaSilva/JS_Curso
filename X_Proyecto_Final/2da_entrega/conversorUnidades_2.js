// **** FUNCIONES de CONVERSION 

// Conversion Longitud
const ConversorLongitud = {

    Long_Centimetros : function(longitud){
        let cent_operacion = longitud * 100;
        let msg_cen = longitud + " metros [m] ------> " + cent_operacion + " centimetros [cm]"
        return msg_cen;
    },

    Long_Milimetros : function(longitud){
        let mili_operacion = longitud * 1000;
        let msg_mili = longitud + " metros [m] ------> " + mili_operacion + " milimetros [mm]"     
        return msg_mili;
    },

    Long_Kilometros : function(longitud){
        let km_operacion = longitud / 1000;
        let msg_km = longitud + " metros [m] ------> " + km_operacion + " Kilometros [Km]"     
        return msg_km;
    },

    Long_Pulgadas : function(longitud){
        let pulgada_operacion = (longitud * 100) / 2.54;
        let msg_pulgada = longitud + " metros [m] ------> " + pulgada_operacion + " Pulgadas [in]"     
        return msg_pulgada;
    },

    Long_Millas : function(longitud){
        let mill_operacion = (longitud / 1000) / 1.609344;
        let msg_mill = longitud + " metros [m] ------> " + mill_operacion + " Millas [ml]"     
        return msg_mill;
    },

    Long_Pie : function(longitud){
        let pie_operacion = (longitud * 100) / 30.48;
        let msg_pie = longitud + " metros [m] ------> " + pie_operacion + " Pies [ft]"     
        return msg_pie;
    }
}



// Conversion Masa
const ConversorMasa = {

    Masa_Gramos : function(masa){
        let gr_operacion = masa * 1000;
        let msg_gr = masa + " Kilogramos [Kg] ------> " + gr_operacion + " Gramos [g]"
        return msg_gr;
    },

    Masa_Miligramos : function(masa){
        let miligr_operacion = masa / 1000000;
        let msg_miligr = masa + " Kilogramos [Kg] ------> " + miligr_operacion + " MiliGramos [mg]"
        return msg_miligr;
    },

    Masa_Tonelada : function(masa){
        let ton_operacion = masa / 1000;
        let msg_ton = masa + " Kilogramos [Kg] ------> " + ton_operacion + " Toneladas [t]"
        return msg_ton;
    },

    Masa_Libra : function(masa){
        let lib_operacion = masa * 2.205;
        let msg_lib = masa + " Kilogramos [Kg] ------> " + lib_operacion + " Libras [lb]"
        return msg_lib;
    },

    Masa_Onza : function(masa){
        let oz_operacion = masa * 35.274;
        let msg_oz = masa + " Kilogramos [Kg] ------> " + oz_operacion + " Onzas [oz]"
        return msg_oz;
    }
}


// Conversion Tiempo
const ConversorTiempo = {

    Tiempo_min : function(tiempo){
        let min_operacion = tiempo * 60;
        let msg_min = tiempo + " Horas [Hrs] ------> " + min_operacion + " Minutos [m]"
        return msg_min;
    },

    Tiempo_seg : function(tiempo){
        let seg_operacion = tiempo * 3600;
        let msg_seg = tiempo + " Horas [Hrs] ------> " + seg_operacion + " Segundos [s]"
        return msg_seg;
    },

    Tiempo_miliseg : function(tiempo){
        let miliseg_operacion = tiempo * 3600000;
        let msg_miliseg = tiempo + " Horas [Hrs] ------> " + miliseg_operacion + " Milisegundos [ms]"
        return msg_miliseg;
    },
}


// Conversion Temperatura
const ConversorTemperatura = {

    Temperatura_fahren : function(temp){
        let fahren_operacion = (temp * 1.8) + 32;
        let msg_fahren = temp + " Grados Celcius [ºC] ------> " + fahren_operacion + " Fahrenheit [ºF]"
        return msg_fahren;
    },

    Temperatura_kel : function(temp){
        let kel_operacion = (temp * 1) + 273.15;
        let msg_kel = temp + " Grados Celcius [ºC] ------> " + kel_operacion + " Kelvin [ºK]"
        return msg_kel;
    }
}



// Array Objetos conversores Unidades

const arrayConversorUnidades = [ConversorLongitud, ConversorMasa, ConversorTiempo, ConversorTemperatura];

// Inicia Civlo Programa

let ciclo = 1;

while(ciclo == 1 ){

    let seleccion = parseInt(prompt("***Programa Conversor de Unidades***\n **selecciona la Unidad: ** \n1 -> Longitud \n2 -> Masa \n3 -> Tiempo \n4 -> Temperatura \n\n5 -> **SALIR**  \nIngresa una Opcion: "));

    if(seleccion == 1){
        let input = parseInt(prompt("Ingrese la longitud en metros: "));
        seleccion = seleccion - 1;
        let conv1 = arrayConversorUnidades[seleccion].Long_Centimetros(input);
        let conv2 = arrayConversorUnidades[seleccion].Long_Milimetros(input);
        let conv3 = arrayConversorUnidades[seleccion].Long_Kilometros(input);
        let conv4 = arrayConversorUnidades[seleccion].Long_Pulgadas(input);
        let conv5 = arrayConversorUnidades[seleccion].Long_Millas(input);
        let conv6 = arrayConversorUnidades[seleccion].Long_Pie(input);

        let msg = alert("Las conversiones de tu valor son: " + "\n\n" + conv1 + "\n" + conv2 + "\n" + conv3 + "\n" + conv4 + "\n" + conv5 + "\n" + conv6);

        ciclo = prompt("ingresa --> (1) para CONTINUAR / (0) para SALIR");   
    }
    else if (seleccion == 2){
        let input = parseInt(prompt("Ingrese la Masa en Kilogramos: "));
        seleccion = seleccion - 1;
        let conv1 = arrayConversorUnidades[seleccion].Masa_Gramos(input);
        let conv2 = arrayConversorUnidades[seleccion].Masa_Miligramos(input);
        let conv3 = arrayConversorUnidades[seleccion].Masa_Tonelada(input);
        let conv4 = arrayConversorUnidades[seleccion].Masa_Libra(input);
        let conv5 = arrayConversorUnidades[seleccion].Masa_Onza(input);
        
        let msg = alert("Las conversiones de tu valor son: " + "\n\n" + conv1 + "\n" + conv2 + "\n" + conv3 + "\n" + conv4 + "\n" + conv5);

        ciclo = prompt("ingresa --> (1) para CONTINUAR / (0) para SALIR");   
    }
    else if (seleccion == 3){
        let input = parseInt(prompt("Ingrese el tiempo en Horas: "));
        seleccion = seleccion - 1;
        let conv1 = arrayConversorUnidades[seleccion].Tiempo_min(input);
        let conv2 = arrayConversorUnidades[seleccion].Tiempo_seg(input);
        let conv3 = arrayConversorUnidades[seleccion].Tiempo_miliseg(input);

        let msg = alert("Las conversiones de tu valor son: " + "\n\n" + conv1 + "\n" + conv2 + "\n" + conv3);

        ciclo = prompt("ingresa --> (1) para CONTINUAR / (0) para SALIR");   
    }
    else if (seleccion == 4){
        let input = parseInt(prompt("Ingrese la temperatura en grados Celcius: "));
        seleccion = seleccion - 1;
        let conv1 = arrayConversorUnidades[seleccion].Temperatura_fahren(input);
        let conv2 = arrayConversorUnidades[seleccion].Temperatura_kel(input);

        let msg = alert("Las conversiones de tu valor son: " + "\n\n" + conv1 + "\n" + conv2);

        ciclo = prompt("ingresa --> (1) para CONTINUAR / (0) para SALIR");   
    }
    else if (seleccion == 5){

        alert("Adios, Muchas Gracias!!!")
        ciclo = 0;
    }

    else{

        alert("Opcion Invalida")
        ciclo = prompt("ingresa --> (1) para CONTINUAR / (0) para SALIR");   
    }


};