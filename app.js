//Conectar JavaScript con HTML
/*If I would have known this before*/
let numeroSecreto; //Esta variable es de alcance global
//console.log(numeroSecreto);
let intentos;
let listaNumerosSorteados = [];
let numeroMax = 10;
let vecesJugadas = 1; 

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; //Le atribuye un string
    return; //No es necesario, pero es buena practica
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //solo busca por id y retorna un objeto, por eso se pone el value
    /*console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto === numeroDeUsuario);*/ //Retorna un booleano


    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); //Llamamos una funcion en otra funcion
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //Se equivoco el user
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');

        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMax) + 1; //Esta de alcance de bloque
    //Para que no repitan los numeros generados
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (vecesJugadas == numeroMax) {
        return asignarTextoElemento('p', 'Ya no hay mas numeros para sortear');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {  //Includes mira si ya esta, devuelve booleano
            //En la recursividad siempre hay que tener cuidado en su salida
            return generarNumeroSecreto();//recursividad
        }
        else {
            listaNumerosSorteados.push(numeroGenerado);
            console.log(`Veces jugadas = ${vecesJugadas}`);
            vecesJugadas++;
            
            return numeroGenerado;
        }
    }

}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMax}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; //con el # query selector sabe q es un id

}

function reiniciarJuego() { //se activa dando click
    //Limpiar la caja y limpiar el texto del p, generar el # aleatorio y habilitar el boton de nuevo juego y inicializar los intentos
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); //Lo que hace es ver a cual boton se refiere y quitarle el disabled

}

//JavaScript, primero ve la funcion en todo el codigo no importa donde la llame, se llama Hoisting
condicionesIniciales();


/*Arreglos, cualquier tipo de dato

Metodo para agregar al final = .push(elemento); //retorna la cantidad de elementos que hay en la lista
Tamanio .length;
ultima elmento en la ultima posicion nombrelista[nombrelista.length-1];
eliminar  ultimo elemento 
frutas.pop();
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]


Acceder a un elemento nombrelista[indice]; //siempre el indice es desde 0

*/ 

//let cuadrado = x => x * x;  increible

/*

Seccion de Desafios 

Crear una función que muestre "¡Hola, mundo!" en la consola.
Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
Crear una función que reciba tres números como parámetros y devuelva su promedio.
Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.


console.log('Hola Mundo');

function funcion1(nombre){
    console.log(`¡Hola, ${nombre}`);
}
function funcion2(numero){
    console.log(numero*2);
}

function funcion3(numero1, numero2, numero3){
    console.log((numero1 + numero2 + numero3)/3);
}

function funcion4(numero1, numero2) {
    if(numero1>numero2){
        console.log(numero1);
    }
    else{
        console.log(numero2);
    }
}


funcion1('Judith');
funcion2(2);
funcion3(10, 4, 9);
funcion4(9,10);
*/



/*
Crea una función que calcule el valor del factorial de un número pasado como parámetro.



function factorial(numero) {
    resultado = 1;
    while (numero > 0){
        resultado *= numero;
        numero--;
    }

   return console.log(resultado);
}

factorial(7);


Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en 
reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
*/



/*
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

*/

/*
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.


function tablaDeMultiplicar(numero) {
    numeroMultiplicador = 1;
    while (numeroMultiplicador <= 12){
        multiplicacion = numero * numeroMultiplicador;
        console.log(`${numero} * ${numeroMultiplicador} = ${multiplicacion}`)
        numeroMultiplicador++;
    }


}

tablaDeMultiplicar(12);
*/

/*

Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.


let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');

function elementosLista(lista) {

    for (let index = 0; index < lista.length; index++) {
         let element = lista[index];
         console.log(element);
    }
    
}

function elementosListaInverso(lista) {

    for (let index = lista.length-1; index >= 0; index--) {
         let element = lista[index];
         console.log(element);
    }
}
    

elementosLista(lenguajesDeProgramacion);
elementosListaInverso(lenguajesDeProgramacion);
lenguajesDeProgramacion

Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
Crea una función que calcule el promedio de los elementos en una lista de números.
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.


listaNumeros = [1,2,3,4,5,6,7,8,9,10]; 

function maximoMinimo(lista) {
    let numeroMayor = 0; 
    let numeroMenor = 800;

    for (let index = 0; index < lista.length; index++) {
        numero = lista[index]; 
         if(numero < numeroMenor){
            numeroMenor = numero;
         } 
         if (numero > numeroMayor){
            numeroMayor = numero;
         }
        

    }
    console.log(numeroMenor, numeroMayor);
}

maximoMinimo(listaNumeros);


Crea una función que devuelva la suma de todos los elementos en una lista.
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/