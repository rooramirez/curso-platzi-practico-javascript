let precioOriginal;
let porcentajeDescuento;

function calcularPrecioConDescuento(precioOriginal, porcentajeDescuento){
    let descuento = (precioOriginal * porcentajeDescuento) /100; 
    let precioFinalConDescuento = precioOriginal - descuento;
    return precioFinalConDescuento;
}

///----------Conexion con HTML

function calcularMontoAPagar(){
    let precio = document.getElementById('inputPrice');
    let valuePrecio =parseFloat(precio.value); 
    let descuento = document.getElementById('inputDiscount');
    let valueDescuento = parseFloat(descuento.value);

    let precioFinal = calcularPrecioConDescuento(valuePrecio, valueDescuento);

    let resultP = document.getElementById('resultP');
    resultP.innerText = "El precio a pagar es $ : " + precioFinal;
}