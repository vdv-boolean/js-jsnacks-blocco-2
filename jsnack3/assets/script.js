/* Consegna
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari */

// Create an array with int numbers
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numberArray);

// Sum odd index numbers
let sum = 0;

for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 !== 0) {
    sum += numberArray[i]
}
}

console.log(sum);