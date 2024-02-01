
let valor = 0;


// Menu seleccion unidades de Longitud
document.getElementById('btnLongitud').addEventListener('click', (e) => {
    e.preventDefault();

    valor = document.querySelector('#btnLongitud');
    valor = valor.value;
    console.log('La seleccion fue: ' +  valor);
    
    if (valor == 'seleccionLongitud'){
        for (const unidad of longitud){   
            const msg = document.querySelector('#conversorUnidades [name="msg"]');       
            msg.innerText = 'Ingresa el valor en ' + ArrayUnidades[0];
        }    
        for (const unidad of longitud){   
            const menu = document.querySelector('#conversorUnidades [name="menuUnidades"]');       
            menu.innerHTML =  ` 
                                
                                <input type="text" name="inputValor" id="inputValor" placeholder="Valor a convertir" />
                                <option value="">Selecciona unidad</option>
                                <option value="${unidad.unidad1}">${unidad.unidad1}</option>
                                <option value="${unidad.unidad2}">${unidad.unidad2}</option>
                                <option value="${unidad.unidad3}">${unidad.unidad3}</option>
                                <option value="${unidad.unidad4}">${unidad.unidad4}</option>
                                <option value="${unidad.unidad5}">${unidad.unidad5}</option>
                                <option value="${unidad.unidad6}">${unidad.unidad6}</option>
                              `;
        }    

    }
});

// Menu seleccion unidades de Masa
document.getElementById('btnMasa').addEventListener('click', (e) => {
    e.preventDefault();

    valor = document.querySelector('#btnMasa');
    valor = valor.value;
    console.log('La seleccion fue: ' +  valor);

    if (valor == 'seleccionMasa'){
        for (const unidad of masa){   
            const msg = document.querySelector('#conversorUnidades [name="msg"]');       
            msg.innerText = 'Ingresa el valor en ' + ArrayUnidades[1];
        } 
        for (const unidad of masa){
            const menu = document.querySelector('#conversorUnidades [name="menuUnidades"]');        
            menu.innerHTML =  `
                                <option selected disabled value="menulist">Selecciona la unidad a convertir..</option>
                                <option value="${unidad.unidad1}">${unidad.unidad1}</option>
                                <option value="${unidad.unidad2}">${unidad.unidad2}</option>
                                <option value="${unidad.unidad3}">${unidad.unidad3}</option>
                                <option value="${unidad.unidad4}">${unidad.unidad4}</option>
                                <option value="${unidad.unidad5}">${unidad.unidad5}</option>
                              `;
        }        
    }
});

// Menu seleccion unidades de Tiempo
document.getElementById('btnTiempo').addEventListener('click', (e) => {
    e.preventDefault();

    valor = document.querySelector('#btnTiempo');
    valor = valor.value;
    console.log('La seleccion fue: ' +  valor);

    if (valor == 'seleccionTiempo'){
        for (const unidad of tiempo){   
            const msg = document.querySelector('#conversorUnidades [name="msg"]');       
            msg.innerText = 'Ingresa el valor en ' + ArrayUnidades[2];
        } 
        for (const unidad of tiempo){
            const menu = document.querySelector('#conversorUnidades [name="menuUnidades"]');        
            menu.innerHTML =  `
                                <option selected disabled value="menulist">Selecciona la unidad a convertir..</option>
                                <option value="${unidad.unidad1}">${unidad.unidad1}</option>
                                <option value="${unidad.unidad2}">${unidad.unidad2}</option>
                                <option value="${unidad.unidad3}">${unidad.unidad3}</option>
                              `;
        }        
    }
});

// Menu seleccion unidades de Temperatura
document.getElementById('btnTemperatura').addEventListener('click', (e) => {
    e.preventDefault();

    valor = document.querySelector('#btnTemperatura');
    valor = valor.value;
    console.log('La seleccion fue: ' +  valor);

    if (valor == 'seleccionTemperatura'){
        for (const unidad of temperatura){   
            const msg = document.querySelector('#conversorUnidades [name="msg"]');       
            msg.innerText = 'Ingresa el valor en ' + ArrayUnidades[3];
        } 
        for (const unidad of temperatura){
            const menu = document.querySelector('#conversorUnidades [name="menuUnidades"]');        
            menu.innerHTML =  `
                                <option selected disabled value="menulist">Selecciona la unidad a convertir..</option>
                                <option value="${unidad.unidad1}">${unidad.unidad1}</option>
                                <option value="${unidad.unidad2}">${unidad.unidad2}</option>
                              `;
        }        
    }
});

// Menu seleccion unidades de Presion
document.getElementById('btnPresion').addEventListener('click', (e) => {
    e.preventDefault();

    valor = document.querySelector('#btnPresion');
    valor = valor.value;
    console.log('La seleccion fue: ' +  valor);

    if (valor == 'seleccionPresion'){
        for (const unidad of presion){   
            const msg = document.querySelector('#conversorUnidades [name="msg"]');       
            msg.innerText = 'Ingresa el valor en ' + ArrayUnidades[4];
        } 
        for (const unidad of presion){
            const menu = document.querySelector('#conversorUnidades [name="menuUnidades"]');        
            menu.innerHTML =  `
                                <option selected disabled value="menulist">Selecciona la unidad a convertir..</option>
                                <option value="${unidad.unidad1}">${unidad.unidad1}</option>
                                <option value="${unidad.unidad2}">${unidad.unidad2}</option>
                              `;
        }        
    }
});



// Accion al Calcular
document.getElementById('btnCalcular').addEventListener('click', (e) => {
    e.preventDefault();    
    console.log(valor);
    // Obtener valor del input
    let inputvalue = document.querySelector('#conversorUnidades [name="inputValor"]');
    inputvalue = inputvalue.value;
    console.log('El valor intriducido es: ' + inputvalue);
    // Obtener valor del menu
    let menuUnidades = document.querySelector('#conversorUnidades [name="menuUnidades"]');
    menuUnidades = menuUnidades.value;
    console.log('La seleccion del menu fue' + menuUnidades);

    // LLamado a Funciones de Calculo
    let res = '';

    (menuUnidades == 'centimetros') ? res = calcCentimetro(inputvalue) : '';
    (menuUnidades == 'milimetros') ? res = calcMilimetro(inputvalue) : '';
    (menuUnidades == 'kilometros') ? res = calcKilometro(inputvalue) : '';
    (menuUnidades == 'pulgadas') ? res = calcPulgada(inputvalue) : '';
    (menuUnidades == 'millas') ? res = calcMillas(inputvalue) : '';
    (menuUnidades == 'pie') ? res = calcPie(inputvalue) : '';

    (menuUnidades == 'gramos') ? res = calcgramo(inputvalue) : '';
    (menuUnidades == 'miligramos') ? res = calcmiligramo(inputvalue) : '';
    (menuUnidades == 'toneladas') ? res = calctonelada(inputvalue) : '';
    (menuUnidades == 'libras') ? res = calcLibra(inputvalue) : '';
    (menuUnidades == 'onzas') ? res = calcOnza(inputvalue) : '';

    (menuUnidades == 'minutos') ? res = calcMin(inputvalue) : '';
    (menuUnidades == 'segundos') ? res = calcSeg(inputvalue) : '';
    (menuUnidades == 'milisegundos') ? res = calcMiliseg(inputvalue) : '';

    (menuUnidades == 'fahrenheit') ? res = calcFahren(inputvalue) : '';
    (menuUnidades == 'kelvin') ? res = calcKelvin(inputvalue) : '';

    (menuUnidades == 'pascal') ? res = calcPascal(inputvalue) : '';
    (menuUnidades == 'atmosfera') ? res = calcAtmosfera(inputvalue) : '';



    console.log(res)

    val = res;

    localStorage.setItem('conversion', JSON.stringify(res) );

    const datos = JSON.parse( localStorage.getItem( 'conversion') )


    // Motrar Resultado

    const mostrarResultado = document.querySelector('#resultado');
    mostrarResultado.innerText = datos;



    // LimpiarFormulario

    function limpiarform(){
        document.getElementById("conversorUnidades").reset();        
    }
    limpiarform()
    console.log(val);
    


});

