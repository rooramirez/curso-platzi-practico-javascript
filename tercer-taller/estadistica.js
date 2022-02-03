// Media Aritmetica (promedio comun), no da resultados exactos 
//cuando hay elementos independientes que son minorias pero afectan el resultado.

let array;

function calcularMediaAritmetica(array) {
    newArray = array.reduce(
        (valorAcumulado = 0, valorActual) => { return valorAcumulado + valorActual });

    let media = newArray / array.length;
    return media;
}

//MEDIANA: es mas acertada que la media, consiste en ordenar nuestros elementos, como por eje de menor a mayor, 
//hay que encontrar el elemento que este exactamente en la mitad de la lista.
//Si la lista es par, la mediana son dos elementos.


function calcularMediana(array) {

    array.sort(function(a, b) {
        return a - b;
      });
      
    let posicion = Math.round(array.length / 2) - 1;

    if (array.length % 2 === 0) {
        let posicionPar = Math.round(array.length / 2);
        return 'La mediana es: ' + array[posicion] + ' y ' + array[posicionPar];
    }

    return 'La mediana es: ' + array[posicion];
}

//MODA: es el elemento que mas se repite en la lista. 

function calcularModa(array) {
    //creo un objeto:
    let obj = {};
//recorro el array de numeros:
    for (let i = 0; i < array.length; i++) {
        //pregunto si no existe la propiedad:
        if (!obj.hasOwnProperty(array[i])) {
            //agrego la propiedad al objeto:
            obj[array[i]] = 1;
        } // si ya existe le sumo 1
        else {
            obj[array[i]] += 1;
        }
    }
    //creo la bandera esMayor, mayor inicializado en cero para comparar valores de las propiedades
    // y claveMayor para guardar la clave del mayor.
    let esMayor = true;
    let mayor = 0;
    let claveMayor;
   //recorro el objeto obj
    for (const key in obj) {
        //prefunto si esMayor es true
         if (esMayor) {
             //le asigno a mayor el valor de la primera propiedad que recorre el for in
            mayor = obj[key];
            //asigno a esMayor el valor de false. 
            esMayor = false;
            //guardo la primer clave que recorre el for in
            claveMayor = key;
        }
        //comparo el valor de mayor con el resto de valores de las propiedades que recorre el for in
        if (mayor < obj[key]) {
            //si alguno de los valores de las propiedades es mayor que el vlaor guardado en mayor, 
            //asigno a mayor el valor de la propiedad que tiene el valor mas grande
            mayor = obj[key];
            //guardo la clave del mayor valor;
            claveMayor = key;
        }
    }
    //devuelvo la clave con mayor valor (con cantidad de veces de repeticion mayor)
    return claveMayor;
}

///-------------------
// function sacarMayor(array){
//     let esMayor = true;
//     let mayor = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (esMayor) {
//             mayor = array[i];
//             esMayor = false;
//         }
        
//         if (mayor < array[i]) {
//             mayor = array[i];
//         }
//     }
//     return mayor;
// }