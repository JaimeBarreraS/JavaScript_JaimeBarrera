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
console.log(superDigit("148", 3)); //salida 3
console.log(superDigit("123", 3)); //salida 9