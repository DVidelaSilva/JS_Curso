
/* 
// 1 - par o impar

let numero = parseInt(prompt("Ingrese un numero: "));
let operacion = numero % 2;

if(operacion == 0){
    alert("El numero es Par");
} else {
    alert("El numero es Impar");
}; 
*/



/* 
// 2 - numero positivo o negativo

let numero = parseInt(prompt("Ingrese un numero: "));

if(numero >= 0){
    alert("El numero es POSITIVO")
} else{
    alert("El numero es NEGATIVO")
}; 
*/



/* 
// 3 - cuociente distinto 0 no dividir

let numero1 = parseInt(prompt("Ingrese el primer numero: "));
let numero2 = parseInt(prompt("Ingrese el segundo numero: "));

let operacion = numero1 / numero2;

if((operacion == 0) || (numero2 == 0)){
    alert("Error no se puede realizar division")
}else{
    alert("El resultado es: " + operacion);
};
*/



/* 
// 4 - Adivinar la letra

let letra = prompt("Adivina la letra ganadora!!: \n Puede ser: A , B , C , D" );

if((letra == "A") || (letra == "a")){
    alert("Felicidades!!, es la letra ganadora")
}else{
    alert("ERROR!! te equivocaste de letra")
}; 
*/



/* 
// 5 -  Devuelve diferencia entre 2 numeros

let numero1 = parseInt(prompt("Ingrese el primer numero: "));
let numero2 = parseInt(prompt("Ingrese el segundo numero: "));

if(numero1 > numero2){
    let num_mayor = numero1
    let num_menor = numero2
    let operacion = num_mayor - num_menor;
    alert("la diferencia es: " + operacion)
} else {
    let num_mayor = numero2
    let num_menor = numero1
    let operacion = num_mayor - num_menor;
    alert("la diferencia es: " + operacion)
};
*/



/* 
// 6 - Dirigir cliente a barra o tienda

let opcion = prompt("Seleccione que necesita y lo dirigire:  " + "\n 1 --> Vino" + "\n 2 --> Cerverza" + "\n 3 --> Refresco"  + "\n 4 --> Agua" );

if((opcion == "1") || (opcion == "2")){
    alert("Debe dirigirse a la Barra")
}else{
    alert("Debe diijirse a la Tienda")
}; 
*/



/* 
// 7 -- Ayuda para Viajar

let opcion = prompt("Seleccione el medio en que viajara:  " + "\n 1 --> Auto" + "\n 2 --> Tren" + "\n 3 --> Bicicleta"  + "\n 4 --> Autobus" );

if((opcion == "2") || (opcion == "4")){
    alert("LLeve dinero para el ticket")
}else{
    alert("Buen Viaje")

}; 
*/



/* 
// 8 - desaclificacion de rally por velocidad

let kilometros = parseInt(prompt("Indique cuantos Kilometros recorrio: "));
let horas = parseInt(prompt("en cuantas horas los recorrio?: "))

let operacion = kilometros / horas;

if ((operacion >= 40) && (operacion <= 60)){
    alert("Su velosidad fue de: " + operacion + "km/h" + "\nExcelente, puede continuar")
}else{
    alert("Su velosidad fue de: " + operacion + "km/h" + "\nSe encuentra descalificado")
}; 
*/



/* 
// 9 - descuento por numero y monto de compras

let articulos = parseInt(prompt("Cuantos articulos compra: "));
let monto = parseInt(prompt("Monto $ de sus articulos: "));
const descuento = 15 / 100;

if((articulos > 10) && (monto > 40)){
    let operacion = (articulos * monto) - ((articulos * monto) * descuento);
    alert("tiene un descuento de un 15% en su compra" + "\n su total a pagar es de: " + operacion);
}else{
    alert("Su compra no aplica descuento");
};
 */



/* 
// 10 - Calculo de promedio 2 notas

let nota1 = parseInt(prompt("Ingrese la primera nota: "));
let nota2 = parseInt(prompt("Ingrese la segunda nota: "));
let nota3 = parseInt(prompt("Ingrese la tercera nota: "));

let prom = (nota1 + nota2 + nota3) / 3;

if(prom < 5){
    alert("Su promedio es : " + prom + "--> SUSPENSO");
} else if((prom >= 5) && (prom <= 7)){
    alert("Su promedio es : " + prom + "--> APROBADO");
} else if(prom > 7){
    alert("Su promedio es : " + prom + "--> NOTABLE");
}; 
*/