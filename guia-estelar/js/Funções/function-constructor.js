/* 

  Function() constructor

  * expressão new
  * criar/instanciar um novo objeto
  * this keyword 

*/

function Person(name) {
  this.name = name;
  this.walk = function() {
    return this.name + ' está andando'
  }
}

const mayk = new Person('mayk') // herda todos os atributos e métodos
console.log(mayk.name)
console.log(mayk.walk())

// exemplos de funções construtoras
String()
Date()
Number()