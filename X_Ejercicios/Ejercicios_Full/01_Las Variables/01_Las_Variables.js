

/* // 1  --> Calculador de precion + iva

let precio = prompt("Ingrese el valor $ de su producto: ");
precio = parseInt(precio);

let iva = 19 / 100;
let resultado = precio + (precio * iva);

alert("El valor de tu producto con el impuesto aplicado es: $ " + resultado ); */


/* // - 2 calculo Area & Perimetro de un cuadrado

let lado = parseInt(prompt("Ingresa la longitud de uno de los lados del cuadrado \n en centimetros: "));

let area = lado * lado;
let perimetro = lado * 4;

alert("Calculos del cuadrado:  " + "\n AREA: " + area + "\n PERIMETRO: " + perimetro); */


/* // - 3 Saluda a la persona

let = nombre = prompt("Cual es tu nombre? : ");
alert("Hola " + nombre + "!");
 */


/* // 4 - Calculo de la media de 3 numeros

let num1 = parseInt(prompt("Ingresa el primero valor: "));
let num2 = parseInt(prompt("Ingresa el segundo valor: "));
let num3 = parseInt(prompt("Ingresa el tercer valor: "));

let resultado = (num1 + num2 + num3) / 3;

alert("LA media de los 3 valores es: " + resultado);
 */


/* // 5 - Calculo de consumo combustible

let kilometraje = parseInt(prompt("Ingrese el numero de kilometros: "));
let litros = parseInt(prompt("Ingrese el numero de litros por kilometro:  "));

let consumo = kilometraje / litros;

alert("Has consumido " + consumo + "l/km")
 */


/* // 6 - Calculo de segundos

let horas = parseInt(prompt("Ingrese el numero de horas: "));
let minutos = parseInt(prompt("Ingrese el numero de minutos"));

let segundos = (horas * 3600) + (minutos * 60);

alert(horas + " Horas con " + minutos + " Minutos son: " + segundos + " segundos"); */


/* // 7 - conversor numero en unidades y decenas

let numero = parseInt(prompt("Ingrese un numero: "));

let decenas = Math.floor(numero / 10);
let unidades = numero % 10;

alert( "el numero: " + numero + " Tiene: " + "\n" + decenas + " Decenas" + "\n" + unidades + " Unidades");
 */


/* // 8 - Calculo de receta segun comensales

let personas = parseInt(prompt("Cuantos seran los Comensales: "));

const papas_per = 200;

let papas = personas * papas_per;

let huevos = (Math.floor(papas / 1000) * 5);

let cebollas = (Math.floor(papas / 1000) * 300);

alert("Para los " + personas + " Comenansales, la receta queda: " 
       + "\n" + papas / 1000 + " kg de papas"
       + "\n" + huevos + " huevos"
       + "\n" + cebollas + " gr de cebolla"); */


/* // 9 - intercambio de datos / variables

let var1 = prompt("Ingrese el primer valor: ");
let var2 = prompt("Ingrese el segundo valor: ");

let varpaso = var1;

var1 = var2;
var2 = varpaso;

alert("Antes: " + "\n varUno vale" + varpaso+ " ,varDos vale" + var2 + "\n Al Final: " + "\n varUno vale" + var1 + " ,varDos vale" + var2); */


/* // 10 - Par o inpar

let numero = parseInt(prompt("Ingresa un numero: "));

let operacion = numero % 2;

let resultado = operacion == 0;

alert("¿Es Par?: " + resultado);
 */


