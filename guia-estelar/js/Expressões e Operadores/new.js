/* 
  new

  * left-hand-side expression
  * criar um novo objeto

*/

let name = new String('Mayk') // criando um novo objeto
name.surname = 'Brito';
let age = new Number(23)
console.log(name.surname, age)

let date = new Date('2020-12-01')
console.log(date)
console.log(date.__proto__) // verificar se é um objeto