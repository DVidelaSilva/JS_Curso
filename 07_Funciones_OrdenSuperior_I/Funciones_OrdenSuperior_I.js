console.log("Clase 07 - Funciones de Orden Superior I");


// Forma 1

/*
const lista = ['manzana', 'uva', 'pera', 'sandia'];

for (const item of lista){

    let texto = pasarMayuscula(item);
    console.log(item, texto);
}

function pasarMayuscula(texto){
    let final = texto.toUpperCase();
    return final;
}

*/

// Forma 1 - Reumida

/*

const lista = ['manzana', 'uva', 'pera', 'sandia'];

const pasarMayuscula = (texto) => texto.toUpperCase();

for (const item of lista){

    let texto = pasarMayuscula(item);
    console.log(item, texto);
}

*/


const array = ['manzana', 'uva', 'pera', 'sandia'];

const pasarMayuscula = (texto) => texto.toUpperCase();

const pasarMinuscula = function(texto){
    return texto.toLowerCase();
}

// esta funcion toma la lista y otra funcion parametros

function porCadaUno(lista, miFuncion){

    for(const item of lista){
        console.log(miFuncion(item))

    }
}

porCadaUno(array, pasarMayuscula);

porCadaUno(array, pasarMinuscula);


// Version Moderna - resumida

porCadaUno(array, (texto) => {
    return texto.replaceAll('a', 'x');
})



// Version Moderna - Aun mas resumida

porCadaUno(array, (texto) => texto.replaceAll('a', 'x'))
