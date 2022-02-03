
function calcularPromedioPonderado(noteAndCredit) {
    // let ver = noteAndCredit.reduce((acumulador, valorActual) => {
    //     let result = (acumulador) + (valorActual * noteAndCredit[credit])
    //     return result;
    // }, valorInicial = 0);

    // return ver;
    let suma = 0;
    let sumaCredit = 0;
    for (let i = 0; i < noteAndCredit.length; i++) {
        suma = suma + (noteAndCredit[i].note * noteAndCredit[i].credit);
        sumaCredit += noteAndCredit[i].credit; 
        
    }
    return suma / sumaCredit;
}

calcularPromedioPonderado([{note : 6, credit: 2}, {note: 7, credit : 2}, {note: 5, credit : 2},{note: 7, credit : 2}])