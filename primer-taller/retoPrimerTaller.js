// Durante este taller aprendimos a calcular el área y 
//perímetro de un triángulo conociendo la longitud de sus 3 lados y también su altura.

// En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

// La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
// La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
// La función debe retornar la altura del triángulo.
let base;
let lado1;
let lado2;

function alturaIsoceles(base, lado1, lado2){
    let altura;
    if (lado1 === lado2 && base != lado1) {
        let altura = Math.sqrt(Math.pow(lado1, 2) - (Math.pow(base, 2)/4))
        return altura;
    }
    return 'no es un triangulo isoceles';
} 