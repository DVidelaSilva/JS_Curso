console.log("****Ejercicio1******")

/*
// Actividad_1

console.log("Actividad1 - Homero")

let nombre = "Homero";
let apellido = "Simpson";
let edad = "muchos";

console.log(nombre + " " + apellido + " tiene " + edad + " años de edad") 
*/


/*
// Actividad_2

console.log("Actividad2 - Ciudades")

const ciudad1 = "Santiago";
const ciudad2 = "Valparaiso";
const ciudad3 = "Rancagua";
const ciudad4 = "Villarrica";
const ciudad5 = "Coquimbo";
*/

/*

// Actividad_3

console.log("Actividad3 - Carnet");

let ciudad = 'BUIN';
let documento = "Licencia de conducir";
const IDdocumento = 'BHGDER235674JGVH';
let nombre = 'Diego';
let apelidos = 'Videla Silva';
let direccion = 'Victor Troncoso Muñoz 1080';
let pais = 'Chile';
const f_nacimiento = '15-09-1988';
let sexo = "M";
let altura = 1.69;
let ojos = 'cafe';
let peso = 90;


console.log("----------------------------------------------------\n" 
            + "|                      " + ciudad + "                        |" + "\n" 
            + "|              " + documento + "                |" + "\n|" 
            + "                                                  |" 
            + "\n| *****************    " + IDdocumento + "            |" 
            + "\n| ***   *****   ***    " + nombre + " " + apelidos + "          |" 
            + "\n| *****************    " + direccion + "  |" 
            + "\n| *******   *******    " + ciudad + " , " + pais + "                |" 
            + "\n| *******   *******    " + "Fecha Nacimiento " + f_nacimiento + " |" 
            + "\n| ** *********** **" + "                                |" 
            + "\n| ***           ***    " + "SEXO  " + "ALTURA  " + "OJOS  " + "PESO" + "    |" 
            + "\n| *****************    " + " " +sexo + "   " + "  " +altura + "   " + ojos + "   " + peso +  "     |" 
            + "\n|" + "                                                  |" 
            + "\n----------------------------------------------------\n");



*/


/*

// Actividad_4

console.log("Actividad4 - Registro de Personas");

integrante1 = prompt('Familia Simpson \n' + "Ingrese el nombre del Padre: ");
integrante2 = prompt('Familia Simpson \n' + "Ingrese el nombre de la Madre: ");
integrante3 = prompt('Familia Simpson \n' + "Ingrese el nombre de la hija mayor ");
integrante4 = prompt('Familia Simpson \n' + "Ingrese el nombre del hijo del medio: ");
integrante5 = prompt('Familia Simpson \n' + "Ingrese el nombre de la hija menor ");

alert("La Familia simpson esta compuesta por: \n\n" 
        + "El padre **" + integrante1 + "**\n" 
        + "La madre **" + integrante2 + "**\n" 
        + "La hija mayor **" + integrante3 + "**\n" 
        + "El hijo del medio **" + integrante4 + "**\n" 
        + "La hija menor **" + integrante5 + "**\n" );


*/


// Actividad_5

console.log("Actividad5 - Descuentos");

monto = prompt('Calculadora de descuento %' + '\nIngrese el monto $ a calcular: ');

let des1 = monto - (monto * 0.1);
let des2 = monto - (monto * 0.2);
let des3 = monto - (monto * 0.3);
let des4 = monto - (monto * 0.4);
let des5 = monto - (monto * 0.5);
let des6 = monto - (monto * 0.6);
let des7 = monto - (monto * 0.7);
let des8 = monto - (monto * 0.8);
let des9 = monto - (monto * 0.9);
let des10 = monto - (monto * 1);

alert("El calculo del % de descuento de tu monto es: "
        + "\n 10% descuento = " + "$ " + des1
        + "\n 20% descuento = " + "$ " + des2
        + "\n 30% descuento = " + "$ " + des3
        + "\n 40% descuento = " + "$ " + des4
        + "\n 50% descuento = " + "$ " + des5
        + "\n 60% descuento = " + "$ " + des6
        + "\n 70% descuento = " + "$ " + des7
        + "\n 80% descuento = " + "$ " + des8
        + "\n 90% descuento = " + "$ " + des9
        + "\n 100% descuento = " + "$ " + des10);
       