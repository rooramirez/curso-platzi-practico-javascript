// Perimetro de un cuadrado: (lado x 4) y Area: lado al cuadrado (lado x lado)

let ladoCuadrado;

function calcularCuadrado(){
    ladoCuadrado = window.prompt('Introduzca lado del cuadrado: ')
    let perimetroCuadrado = ladoCuadrado * 4;
    let areaCuadrado = ladoCuadrado * ladoCuadrado;

    return alert('El perimetro del cuadrado es: ' + perimetroCuadrado + 
    ' y el area: ' + areaCuadrado );
}

let perimetroCuadrado = ladoCuadrado => ladoCuadrado * 4;

let areaCuadrado = ladoCuadrado => ladoCuadrado * ladoCuadrado;

//Triangulo perimetro: (L + L + L); area: (base x altura) / 2

let base;
let altura;
let lado1;
let lado2;

function calcularTriangulo(){
    base = window.prompt('Introduzca el valor de la base  del triangulo: ');
    altura = window.prompt('Introduzca el valor de la altura del triangulo: ');
    lado1 = window.prompt('Introduzca el valor del lado 1 del triangulo: ');
    lado2 = window.prompt('Introduzca el valor del lado 2  del triangulo: ');
    let perimetroTrinagulo = parseFloat(base) + parseFloat(lado1) + parseFloat(lado2);
    let areaTriangulo = (base * altura) / 2;

    return alert('el valor del perimetro del trinagulo es : ' + perimetroTrinagulo +
     ' y el area del trinagulo es : ' + areaTriangulo)
}

let perimetroTriangulo = (base, lado1, lado2) => {parseFloat(base) + parseFloat(lado1) + parseFloat(lado2)};
let areaTriangulo = (base, altura) => {(base * altura) / 2};


//Circulo perimetro: "Circunferencia": [radio, diamtro (radio x 2)] Diametro x PI
//area: (radio x radio x PI)

let radio;

function calcularCirculo(){

    radio = window.prompt('indroduzca el valor del radio del ciculo :');
    let diametro = radio * 2;
    let circunferencia = diametro * Math.PI;
    let areaCirculo = Math.pow(radio, 2) * Math.PI;

    return alert('el perimetro del circulo es: ' + circunferencia + ' y el area es : ' + areaCirculo);
}

let perimetroCirculo = (radio) => {
    let diametro = radio * 2;
    return diametro * Math.PI;
}

let areaCirculo = (radio) => Math.pow(radio, 2) * Math.PI;


//------------------Interaccion con HTML
//Cuadrado:

function calcularPerimetro(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularArea(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo:

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById('lado1');
    const valueLado1 = lado1.value;
    const lado2 = document.getElementById('lado2');
    const valueLado2 = lado2.value;
    const base = document.getElementById('base');
    const valueBase = base.value;
   
    const perimetro = perimetroTriangulo(valueBase, valueLado1, valueLado2);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const base = document.getElementById('base');
    const valueBase = base.value;
    const altura = document.getElementById('altura');
    const valueAltura = altura.value;

    const area = areaTriangulo();
    alert(area);
}

///Circulo:

function calcularPerimetroCirculo(){
    const Input = document.getElementById('InputCirculo');
    const value = Input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const Input = document.getElementById('InputCirculo');
    const value = Input.value;

    const area = areaCirculo(value);
    alert(area);
}