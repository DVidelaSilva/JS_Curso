console.log("Ejercicio 8 - Array");


/* 
// 1 - Dias de la semana


function queDiaEs(dia){

    dia = dia - 1
    const semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    let seleccion = semana[dia];
    let msg = alert((dia + 1) + " Corresponde al dia " + seleccion + " de la semana");

    return msg

}

let input = parseInt(prompt("Ingrese un numero: "));

queDiaEs(input); 
*/



/* 
// 2 - verdadero o falso

function Verdadero_Falso(num){

    const array = [true,false];
    

    if((num >= 0) && (num <=9)){
        let seleccion = array[0]
        let msg = alert(seleccion)
    }else{
        let seleccion = array[1]
        let msg = alert(seleccion)
    }
    return msg;

}

let input = parseInt(prompt("Ingrese el numero verdadero: "));

Verdadero_Falso(input); 

*/



/* 
// 3 - suma de numeros en una lista (metodos del objeto array)

const lista = [];

function sumaLista(lista){
    console.log(lista[2]);
    let suma = 0;
    let msg = "";

    for(let i = 0; i < lista.length; i++){

        suma += lista[i]; 

       

    }
    msg = alert("La suma del array es " + suma);
    console.log(suma)
    return msg
};

sumaLista([2,4,5,1,2]); 
*/



/* 
// 4 - cuantos pares e impares en un array

const list = [];

function paresImpares(){

    let numero = parseInt(prompt("Ingrese un numero"))

    while(numero != 0){

        list.push(numero)
        console.log(list)

        numero = parseInt(prompt("Ingrese un numero"))
    }
    
    let contpar = 0;
    let contimpar = 0;
    let msg = "";

    for(let i = 0; i < list.length; i ++){

        if((list[i] % 2) == 0){
            contpar ++;
        }else{
            contimpar ++;
        }        
    }

    msg = alert("En el array hay: " + contpar + " numeros pares y " + contimpar + " numeros impares");
}

paresImpares() 
*/