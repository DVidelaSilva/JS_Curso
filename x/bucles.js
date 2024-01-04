
/*
// Muetra 5 veces el hola

// 1ero Variable de control - 2do condicion - 3ero incremento


for( let i=1; i <= 4; i++){
    console.log("Hola" + i);
}

*/


/*
// solicita el usuario hasta que sea el usuario 'juan'

let usuario;


let continuar = true;

// Mientras var de control

while( continuar === true ){
    console.log('Estamos en el while');

    continuar = confirm('¿Seguro que deseas continuar');
}

*/


//solicita el usuario hasta que sea el usuario 'juan'
let usuario = prompt('Usuario');

//mientras no sea juan
while(usuario != 'juan') {
    console.log('usuario invalido');

    usuario = prompt('Usuario')
}

console.log('Bienvenido Juan :D');