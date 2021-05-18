// declaração or declaration
var name

// assignment or atribuição de valores
name = "Mike"

// que tipo de dado foi colocado na variável
console.log(typeof name)

// agrupamento de declarações
let age, isHuman

age = 18
isHuman = true 

// múltiplos argumentos na função
console.log(name, age, isHuman)

// escrita de texto + variavéis

// interpolação = juntar o texto escrito da string junto com uma expressão, que pode
// tanto ser uma conta ${1 + 1} como uma variável em si ${soma}

// concatenando os valores da forma antiga
console.log('o ' + name + ' tem ' + age + ' anos.')

// interpolando valores com template literals/template strings
console.log(`o ${nome} tem ${age} anos.`)