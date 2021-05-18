// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhâ top
let pao = true
let queijo = false 

let niceBreakfast = pao || queijo ? 'café top' : 'café ruim'
console.log(niceBreakfast)

let age = 18
let canDrive = age >= 18 ? 'Can drive' : "Can't drive"
console.log(canDrive)