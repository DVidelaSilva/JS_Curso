console.log("****Ejercicio4******");

/*

// Actividad_1 - Entradas y Salidas


function entrada(){

    temCelcius = prompt("Conversor Celcius-Fahrenheit" + "\nIngrese la temperatura en grados Celcius:");
    temCelcius = parseFloat(temCelcius);
    return temCelcius;
}

function procesamiento(tem_Celcius){

    tempFahrenheit = ((tem_Celcius * 1.8) + 32);
    return tempFahrenheit;

}

function salida(temp_Fahrenheit){
    alert(temCelcius + " Grados Celcius, equivalen a " + temp_Fahrenheit + " Grados Fahrenheit");
}

entrada();
procesamiento(temCelcius);
salida(tempFahrenheit);

*/


/*

// Actividad_2 - Redondeo


function redondeo(){
   
    let decimal = prompt("Ingrese un numero Decimal: ");
    decimal = parseFloat(decimal);
    decimal = Math.round(decimal);
    alert(decimal);
}

for(let i = 0; i <= 5; i++){
    redondeo();
}

*/

/*

// Actividad_3 - Impuestos

for (let i = 0; i <= 4; i++){

    let precio = prompt("Ingrese el precio: ");
    precio = parseInt(precio);

    let porcentaje = prompt("INgrese el porcentaje% de impuesto: ")
    porcentaje = parseInt(porcentaje)
    porcentaje = porcentaje / 100;


    function impuesto(precio_in, porcentaje_in){

        resultado = (precio_in * porcentaje_in) + precio_in;
        alert("el impuesto calculado es: " + resultado);
    }

impuesto(precio, porcentaje);

}

*/

// Actividad_4 - Cotizacion

/*

function conv_dolar(pesos_in, valorDolarHoy_in){

    let resultado = pesos_in / valorDolarHoy_in;
    resultado = resultado.toFixed(2);

    let mensaje = "Tus pesos valen $ " + resultado + " dolares";

    alert(mensaje);
}

function conv_pesos(dolar_in, valorpesosHoy_in){

    let resultado = dolar_in * valorpesosHoy_in;
    resultado = resultado.toFixed(0);

    let mensaje = "Tus Dolares valen $ " + resultado + " Pesos";

    alert(mensaje);
}



let opcion = prompt("Que tipo de cotizacion quiere realizar" + "\n Opcion1 --> Peso a Dolar" + "\n Opcion2 --> Dolar a Peso"+ "\n ingrese el numero de opcion: ")

if (opcion == "1"){

    let misPesos = parseFloat(prompt("Ingrese sus Pesos: "));
    let valorDolar = parseFloat(prompt("Ingrese el valor del DolarHoy: "));

    conv_dolar(misPesos, valorDolar);

}
else if (opcion == "2"){

    let misDolares = parseFloat(prompt("Ingrese sus Dolares: "));
    let valorPesos = parseFloat(prompt("Ingrese el valor del PesoHoy: "));

    conv_pesos(misDolares, valorPesos);


}

else {
    alert("opcion invalida");
}

*/

// Actividad_5 - Validacion


function validacion(cadena){
    return cadena != '';
}
let entrada =  prompt("INGRESAR CADENA");
entrada = entrada.toUpperCase();

while (entrada != 'ESC') {
    alert(validacion(entrada));
    entrada = prompt("INGRESAR CADENA");
    entrada = entrada.toUpperCase();
}