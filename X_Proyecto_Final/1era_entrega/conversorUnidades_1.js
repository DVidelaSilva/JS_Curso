let ciclo = 1;

while(ciclo == 1) {

console.log("***Programa Conversor de Unidades***");

let seleccion = prompt("***Programa Conversor de Unidades***\n **selecciona la Unidad: ** \n1 -> Longitud \n2 -> Masa \n3 -> Tiempo \n4 -> Temperatura  \n\nIngresa una Opcion: ");

    if (seleccion == 1){
        console.log("Seleccionaste la conversion de LONGITUD, ingresa la longitud en ** METROS ** ");
        let longitud_input = prompt("Ingresa la longitud en ** METROS **");
    
        console.log(longitud_input + " Metros [m] son: " )
        let longitud_metros = longitud_input;
        let longitud_centimetros = longitud_input * 100;
        let longitud_milimetros =  longitud_input * 1000;
        let longitud_kilometros = longitud_input / 1000;
        let longitud_pulgadas = (longitud_input * 100) / 2.54;
        let longitud_millas = (longitud_input / 1000) / 1.609344
        let longitud_pie = (longitud_input * 100) / 30.48;
    
        
        console.log("-> " + longitud_centimetros + " centimetros [cm] ");
        console.log("-> " + longitud_milimetros + " milimetros [mm] ");
        console.log("-> " + longitud_kilometros + " kilometros [km] ");
        console.log("-> " + longitud_pulgadas + " pulgadas [in]");
        console.log("-> " + longitud_millas + " millas [ml]");
        console.log("-> " + longitud_pie + " pies [ft]");

        ciclo = prompt("ingresa --> (1) para CONTINUAR / (0) para SALIR");   
    }

    else if (seleccion == 2){
        console.log("Seleccionaste la conversion de MASA, ingresa la masa en ** KILOGRAMOS ** ");
        let masa_input = prompt("Ingresa la masa en ** KILOGRAMOS **  ");
    
        console.log(masa_input + " Kilogramos [kg] son: " )
        let masa_kilogramos = masa_input;
        let masa_gramos = masa_input * 1000;
        let masa_miligramo = masa_input / 1000000;
        let masa_tonelada = masa_input / 1000;
        let masa_libra = masa_input * 2.205;
        let masa_onza = masa_input * 35.274;
    
        console.log("-> " + masa_gramos + " gramos [g] ");
        console.log("-> " + masa_miligramo + " miligramos [mg] ");
        console.log("-> " + masa_tonelada + " tonelada [t] ");
        console.log("-> " + masa_libra + " libras [lb]");
        console.log("-> " + masa_onza + " onzas [oz] ");

        ciclo = prompt("ingresa --> (1) para CONTINUAR / (0) para SALIR");
    }

    else if (seleccion == 3){
        console.log("Seleccionaste la conversion de TIEMPO, ingresa el tiempo en ** HORAS ** ");
        let tiempo_input = prompt("Ingresa el tiempo en ** HORAS ** ");
    
        console.log(tiempo_input + " Horas [hrs] son: " )
        let tiempo_horas = tiempo_input;
        let tiempo_minutos = tiempo_input * 60;
        let tiempo_segundos =  tiempo_input * 3600;
        let tiempo_milisegundos = tiempo_input * 3600000;
    
        console.log("-> " + tiempo_minutos + " minutos [m] ");
        console.log("-> " + tiempo_segundos + " segundos [s] ");
        console.log("-> " + tiempo_milisegundos + " milisegundos [ms]");

        ciclo = prompt("ingresa --> (1) para CONTINUAR / (0) para SALIR");
    
    }

    else if (seleccion == 4){
        console.log("Seleccionaste la conversion de TEMPERATURA, ingresa la temperatura en ** GRADOS CELSIUS ** ");
        let temperatura_input = prompt("Ingresa la temperatura en ** GRADOS CELSIUS ** : ");
    
        console.log(temperatura_input + " grados celsius [ºC] son: " )
        let temperatura_celsius = temperatura_input;
        let temperatura_fahrenheit = (temperatura_celsius * 1.8) + 32;
        let temperatura_kelvin =  (temperatura_celsius * 1) + 273.15;
    
        console.log("-> " + temperatura_fahrenheit + " Fahrenheit [ºF] ");
        console.log("-> " + temperatura_kelvin + " Kelvin [ºK] ");

        ciclo = prompt("ingresa --> (1) para CONTINUAR / (0) para SALIR");
    
    }
    else {
        console.log("Seleccion Invalida");

        ciclo = prompt("ingresa --> (1) para CONTINUAR / (0) para SALIR");
    }


}