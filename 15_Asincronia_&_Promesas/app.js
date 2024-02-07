const body = document.querySelector('body');
const btnGet = document.querySelector('#btnGet');

const span = document.querySelector('span');
let count = 0;

span.innerText = count;

const intervalo = setInterval( () => {
    count++;
    span.innerText = count;

    if( count == 10){
        clearInterval(intervalo)
    }
}, 1000)


const mostrarLoading = () => {
    body.classList.remove('loaded');
}

const ocultarLoading = () => {
    body.classList.add('loaded');
}

btnGet.addEventListener('click', () => {
    mostrarLoading();
    console.log('inicio de Pedido...');

    setTimeout(() => {
        console.log('Pedido Entregado')
    ocultarLoading();
    }, 3000)

    console.log('Fin ....')

})


console.log('1. Viajar 30');
console.log('2. Preparar la cena 30');
console.log('3. Cenar 30');