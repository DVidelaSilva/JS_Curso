
// ------------------- FUNCIONES CALCULOS LONGITUD --------------------

function calcCentimetro (input){

    let resultado = (input * 100);
    let msg_cen = input + " metros [m] ------> " + resultado + " centimetros [cm]"
    return msg_cen;

}

function calcMilimetro (input){

    let resultado = (input * 1000);
    let msg_mili = input + " metros [m] ------> " + resultado + " milimetros [mm]" 
    return msg_mili;

}

function calcKilometro (input){

    let resultado = (input / 1000);
    let msg_km = input + " metros [m] ------> " + resultado + " kilometros [km]" 
    return msg_km;

}

function calcPulgada (input){

    let resultado = ((input * 100) / 2.54);
    let msg_pulgada = input + " metros [m] ------> " + resultado + " Pulgadas [in]"  
    return msg_pulgada;

}

function calcMillas (input){

    let resultado = ((input / 1000) / 1.609344);
    let msg_millas = input + " metros [m] ------> " + resultado + " Millas [ml]"  
    return msg_millas;

}

function calcPie (input){

    let resultado = ((input * 100) / 30.48);
    let msg_pie = input + " metros [m] ------> " + resultado + " Pies [ft]"  
    return msg_pie;

}


// ------------------- FUNCIONES CALCULOS MASA --------------------

function calcgramo (input){

    let resultado = (input * 1000);
    let msg_gr = input + " Kilogramos [Kg] ------> " + resultado + " Gramos [g]"
    return msg_gr;

}

function calcmiligramo (input){

    let resultado = (input / 1000000);
    let msg_miligr = input + " Kilogramos [Kg] ------> " + resultado + " MiliGramos [mg]" 
    return msg_miligr;

}

function calctonelada (input){

    let resultado = (input / 1000);
    let msg_ton = input + " Kilogramos [Kg] ------> " + resultado + " Toneladas [t]" 
    return msg_ton;

}

function calcLibra (input){

    let resultado = (input * 2.205);
    let msg_libra = input + " Kilogramos [Kg] ------> " + resultado + " Libras [lb]" 
    return msg_libra;

}

function calcOnza (input){

    let resultado = (input * 35.274);
    let msg_onza = input + " Kilogramos [Kg] ------> " + resultado + " Onzas [oz]"
    return msg_onza;

}


// ------------------- FUNCIONES CALCULOS TIEMPO --------------------

function calcMin (input){

    let resultado = (input * 60);
    let msg_min = input + " Horas [Hrs] ------> " + resultado + " Minutos [m]"
    return msg_min;

}

function calcSeg (input){

    let resultado = (input * 3600);
    let msg_seg = input + " Horas [Hrs] ------> " + resultado + " Segundos [s]"
    return msg_seg;

}

function calcMiliseg (input){

    let resultado = (input * 3600000);
    let msg_miliseg = input + " Horas [Hrs] ------> " + resultado + " Milisegundos [ms]"
    return msg_miliseg;

}



// ------------------- FUNCIONES CALCULOS TEMPERATURA --------------------

function calcFahren (input){

    let resultado = ((input * 1.8) + 32);
    let msg_fahren = input + " Grados Celcius [ºC] ------> " + resultado + " Fahrenheit [ºF]"
    return msg_fahren;

}

function calcKelvin (input){

    let resultado = ((input * 1) + 273.15);
    let msg_kelvin = input + " Grados Celcius [ºC] ------> " + resultado + " Kelvin [ºK]"
    return msg_kelvin;

}



// ------------------- FUNCIONES CALCULOS TEMPERATURA --------------------

function calcPascal (input){

    let resultado = (input * 100000);
    let msg_pascal = input + " Bar [bar] ------> " + resultado + " Pascal [P]"
    return msg_pascal;

}

function calcAtmosfera (input){

    let resultado = (input * 0.987);
    let msg_atm = input + " Bar [bar] ------> " + resultado + " Atmosfera [atm]"
    return msg_atm;

}

// ------------------- FUNCIONES CALCULOS ECONOMICOS --------------------

//LLamado a API Indicadores Economicos

function calcEconomicos (input){

    const endPoint = 'https://mindicador.cl/api';

    let opcion = menuUnidades.value

    console.log("Me traigo la opcion del index" + opcion)

        fetch( endPoint)

        .then( respuesta =>  respuesta.json())
        .then( respJSON => {
        
            let arrayApi = [respJSON.dolar.valor, respJSON.euro.valor, respJSON.bitcoin.valor, respJSON.uf.valor]
            
            console.log(arrayApi)  
            
            // calculo Dolar
            let resultadodolar = (input * (arrayApi[0]/1000000)).toFixed(2);
            let msg_dolar = input + " Peso Chileno [$] ----> " + resultadodolar + " Dolar [$]"   

            // calculo Euro
            let resultadoeuro = (input * (arrayApi[1]/1000000)).toFixed(2);
            let msg_euro = input + " Peso Chileno [$] ----> " + resultadoeuro + " Euro [$]" 
            
            // calculo Euro
            let resultadobitcoin = (input * (arrayApi[2]/1000000000000)).toFixed(2);
            let msg_bitcoin = input + " Peso Chileno [$] ----> " + resultadobitcoin + " Bitcoin [B$]" 

            // calculo Euro
            let resultadouf = (input * (arrayApi[3]/1000000000)).toFixed(2);
            let msg_uf = input + " Peso Chileno [$] ----> " + resultadouf + " UF [UF]" 

            console.log("Entro a la condicion de: " + opcion)

        if (opcion == 'dolar'){

            console.log(msg_dolar)
            Swal.fire({
                    title: "Resultado",
                    text: msg_dolar,
                    imageUrl: 'images/esigual.png',
                    imageWidth: 150,
                    imageHeight: 150,
                    imageAlt: "simbolo es igual"
                })
                const mostrarResultado = document.querySelector('#resultado');
                mostrarResultado.innerText = msg_dolar;  
        }else if(opcion == 'euro'){
            console.log(msg_euro)
            Swal.fire({
                title: "Resultado",
                text: msg_euro,
                imageUrl: 'images/esigual.png',
                imageWidth: 150,
                imageHeight: 150,
                imageAlt: "simbolo es igual"
              }) 
              const mostrarResultado = document.querySelector('#resultado');
              mostrarResultado.innerText = msg_euro;
        }else if(opcion == 'bitcoin'){
            console.log(msg_bitcoin)
            Swal.fire({
                title: "Resultado",
                text: msg_bitcoin,
                imageUrl: 'images/esigual.png',
                imageWidth: 150,
                imageHeight: 150,
                imageAlt: "simbolo es igual"
              }) 
              const mostrarResultado = document.querySelector('#resultado');
              mostrarResultado.innerText = msg_bitcoin;
        }else if(opcion == 'uf'){
            console.log(msg_uf)
            Swal.fire({
                title: "Resultado",
                text: msg_uf,
                imageUrl: 'images/esigual.png',
                imageWidth: 150,
                imageHeight: 150,
                imageAlt: "simbolo es igual"
              })
              const mostrarResultado = document.querySelector('#resultado');
              mostrarResultado.innerText = msg_uf; 
        }
    }).catch( error=> {
        console.error( error)
        Swal.fire({
            title: "Upss tenemos un problema",
            text: 'Ocurrio un error en el servidor. Por favor intente más tardes',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    })
}



