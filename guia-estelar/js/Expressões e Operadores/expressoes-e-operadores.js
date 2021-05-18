/* Expressões e Operadores

- Expressions (qualquer linha de código que resolve um problema)
- Operators
    Binary
    Unary
    Ternary
*/

let number
let number; // ; é opcional, mas segue um caso que precisa dele para o código funcionar

// com uma função auto-executável
(function() {
  console.log('alo')
})()

// operador binário
let number = 1
console.log(number + 1)

// operador unário
let number = 1
console.log(++number)
console.log(--number)
console.log(number++)
console.log(number--)

// operador ternário
console.log(false ? 'alo' : 'nada')

