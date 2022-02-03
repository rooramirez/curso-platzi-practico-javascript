let salariosArg = argentina.map(
    function (personita){
        return personita.salary;
    }
);

let orderArray = salariosArg.sort(function(a, b) {
    return a - b;
  });

function calcularMediana(orderArray) {
    
    let posicion = Math.round(orderArray.length / 2) - 1;

    if (orderArray.length % 2 === 0) {
        let posicionPar = Math.round(orderArray.length / 2);
        return 'La mediana es: ' + orderArray[posicion] + ' y ' + orderArray[posicionPar];
    }

    return 'La mediana es: ' + orderArray[posicion];
}

let medianaSalarios = calcularMediana(orderArray);

//// Top 10 salarios:
let spliceStart = (orderArray.length * 90) / 100;
let spliceCount = orderArray.length - spliceStart;

let salariosArgTop10 =  orderArray.splice( spliceStart, spliceCount);

let medianaTop10 = calcularMediana(salariosArgTop10);