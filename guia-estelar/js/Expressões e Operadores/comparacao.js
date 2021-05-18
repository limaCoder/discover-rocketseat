// Operadores de comparação

// Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2

// == igual
console.log(one == 1) // true
console.log(one == '1') //true

// != diferente
console.log(one != two) // true
console.log(one != 1) // false
console.log(one != "1") // false

// === estritamente igual
console.log(one === '1') // false
console.log(one === 1) // true

// !== estritamente diferente
console.log(two !== '2') // true
console.log(two !== 2) // false
console.log(two !== two) // false
console.log(two !== one) // true

// > maior
console.log(one > two) // false
console.log(two > one) // true

// maior igual
console.log(one >= two) // false
console.log(one >= one) // false
console.log(two >= one) // true
console.log(two >= two) // true

// < menor
console.log(one < two) // true
console.log(two < one) // false

// menor igual
console.log(one <= two) // true
console.log(two <= one) // false
console.log(two <= two) // true
console.log(one <= one) // true
console.log(one <= 0) // true