console.log("Actividad 1 - Ciclos e Iteraciones");
console.log("****** Numero PAR o IMPAR ******")


// WHILE

/* alert("HOLA!, cual es tu nombre??..." + "\n\n (ingresa ESC para salir)") 
input = prompt("Ingresa tu nombre")

while(input != "ESC"){
       
    alert("HOLA, " + input + " Bienvenido!");
    input = prompt("Ingresa tu nombre");   
} */


// FOR - sumatoria de numeros

let total_num = parseInt(prompt("Ingrese cuantos numeros quieres sumar: "));
total_num = total_num - 1;
let sum = 0;
for(let i = 0; i <= total_num; i++){
    
    let numero = parseInt(prompt("Ingrese un numero: "))
    sum = sum + numero;
    
}
alert("La suma de tus numeros es: " + sum);


