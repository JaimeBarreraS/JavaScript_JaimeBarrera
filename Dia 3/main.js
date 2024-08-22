function superDigit(n,k){
    // n(string) una cadena
    // k(numero) veces que el numero se repite 

    //si la n solo tiene un numero se devuelve ese mismo
    if (n.length === 1){
        return parseInt(n); 
    }
    // calcula la suma de n
    const digitSum = n.split('').reduce((acc, digit) => acc + parseInt(digit),0);
    
    // multipla la suma de los numeros por k
    const totalSum = digitSum * k;
    
    //llama el numero y k=1
    return superDigit(totalSum.toString(), 1);

}

console.log("Para 148 y 3:")
console.log("1. Suma incial: 1 + 4 + 8 = 13")
console.log("2. Multiplicacion: 13 * 3 = 39")
console.log("3. Nueva llamada: superDigit('39',1")
console.log("4. Suma: 3 + 9 = 12")
console.log("5. Nueva llamada: superDigit('12',1")
console.log("6. Suma: 1 + 2 = 3")
console.log("7. Resultado final")
console.log(superDigit("148", 3)); //salida 3
console.log("Para 123 y 3:")
console.log("1. Suma incial: 1 + 2 + 3 = 6")
console.log("2. Multiplicacion: 6 * 3 = 18")
console.log("3. Nueva llamada: superDigit('18',1")
console.log("4. Suma: 1 + 8 = 9")
console.log("5. Resultado final")
console.log(superDigit("123", 3)); //salida 9