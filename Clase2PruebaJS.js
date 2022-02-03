//VAriables y operaciones
// 2)

// // (Nombre)
let nombre = '';
// // Apellido
let apellido = '';
// // Nombre de usuario en Platzi
let userPlatzi = Number;
// // Edad
let edad = Number;
// // Correo electrónico
let email = '';
// // Mayor de edad
let mayor = Boolean;
// // Dinero ahorrado
let ahorro = 0;
// // Deudas
let deuda = 0;

//4)
function nombreCompleto() {
    return nombre + ' ' + apellido;
}
function dineroReal() {
    return dinero - deuda;
}

//function 
//2) 
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

// console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function presentacion(name, lastname, nickname) {
    var completeName = name + ' ' + lastname;

    return "Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + "."
}

//Condicionales
//2)
const tipoDeSuscripcion = "Basic";

// switch (tipoDeSuscripcion) {
//    case "Free":
//        console.log("Solo puedes tomar los cursos gratis");
//        break;
//    case "Basic":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//        break;
//    case "Expert":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//        break;
//    case "ExpertPlus":
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//        break;
// }
function suscripcion(tipoDeSuscripcion) {

    //3)
    let suscrip = {
        Free: 'Solo puedes tomar los cursos gratis',
        Basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
        Expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
        ExpertPlus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
    }
    if (suscrip[tipoDeSuscripcion]) {
        return suscrip[tipoDeSuscripcion]
    }
    return 'No tiene suscripcion'

    // //2)----------------------------------
    if (tipoDeSuscripcion === "Free") {
        return "Solo puedes tomar los cursos gratis";
    }
    else if (tipoDeSuscripcion === 'Basic') {
        return "Puedes tomar casi todos los cursos de Platzi durante un mes";
    }
    else if (tipoDeSuscripcion === 'Expert') {
        return "Puedes tomar casi todos los cursos de Platzi durante un año";
    }
    else if (tipoDeSuscripcion === 'ExpertPlus') {
        return "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año";
    }
    else return 'No tiene suscripcion';

    //Bonus:
    let suscrip = {
        Free: 0,
        Basic: 1,
        Expert: 2,
        ExpertPlus: 3
    }
    let descrip = ["Solo puedes tomar los cursos gratis",
        "Puedes tomar casi todos los cursos de Platzi durante un mes",
        "Puedes tomar casi todos los cursos de Platzi durante un año",
        "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]

    if (suscrip[tipoDeSuscripcion]) {
        return descrip[suscrip[tipoDeSuscripcion]];
    }
    return 'No tiene suscripcion';
}

////Ciclos
//2) 

i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}
//------------------------------------------------------
i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

//3)

function resolverSuma() {
    let result;

    while (result != 4) {
        //preg 
        result = window.prompt('¿cuanto es 2 + 2 ?');
        //verifico respuesta del usuario
        if (result == 4) {
            return alert('Felicitaciones');
        }
    }
}

/// Listas:
//2)
function primerElemento(array) {
    return array[0];
}
//3)
function todosSusElementos(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
//4
function objCompleto(objeto) {
    for (const key in objeto) {
        console.log(key)
        console.log(objeto[key]);
    }
} 