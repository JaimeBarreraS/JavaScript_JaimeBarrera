//EJERCICIO #1

function CalcularAñoNacimiento(edad){
    const añoActual = 2024;
    const añoNacimiento = añoActual - edad;
    return "Naciste en " + añoNacimiento; 
}
console.log(CalcularAñoNacimiento(25));

//EJERCICIO #2

function CelsiusAFarenheiht(celsius){
    const farenheiht = 32 +(9*celsius/5);
    return "Grados Farenheiht " + farenheiht; 
}

console.log(CelsiusAFarenheiht(0))
console.log(CelsiusAFarenheiht(200))

//EJERCICIO #3

function CalcularDescuento (ordenCliente){
    if (ordenCliente <= 20) {
        return 30;
    } else if (ordenCliente <=50){
        return 10;
    }   else {
        return 0;
    }
}

console.log("Cliente #10 "+ CalcularDescuento(10) + "% Descuento");
console.log("Cliente #30 "+ CalcularDescuento(30) + "% Descuento");
console.log("Cliente #60 "+ CalcularDescuento(60) + "% Descuento");