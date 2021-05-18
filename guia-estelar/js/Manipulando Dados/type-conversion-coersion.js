/* 
  Type conversion (typecasting) (alteração feita por nós mesmos) vs Type coersion (alteração coercetiva feita pelo próprio js)

  * Alteração de um tipo de dado para outro tipo

*/

console.log('9' + 5) // type coersion - para funcionar, o js fará type coersion para o 5 virar string
console.log(Number('9') + 5) // type conversion

// Manipulando Strings e Números

// Transformar String em Número e Número em String
let string = '123';
console.log(Number(string))
let number = 321
console.log(String(number))

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = 'Paralelepipedo';
console.log(word.length)
let number2 = 1234;
console.log(number2.length) // não funciona
console.log(String(number2).length)

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number3 = 345.33452345
console.log(number3.toFixed(2).replace('.', ','));

let word2 = 'Programar é muito bacana!'
console.log(word2.toUpperCase())
console.log(word2.toLowerCase())

// Verificar se o texto contém a palavra Amor
let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes('Amor'))

// Separe um texto que contém espaços, em um novo array onde cada texto é uma
// é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços coloque _
let phrase2 = 'Eu quero viver o Amor!';
let myArray = phrase2.split(" ") // transformando cada string em elementos do array // split = dividir
let phraseWithUnderscore = myArray.join("_").toLocaleLowerCase()
console.log(phraseWithUnderscore) 

// Manipulando Arrays

// Criar Array com construtor
let myArray2 = new Array('a', 'b', 'c')
let myArray3 = new Array(10) // cria um array com 10 posições
console.log(myArray3)

// Contar elementos de um array
console.log(["a", "b", "c"].length)
console.log([
  "a",
 {type: "array"}, 
 function() { return "alo"},
] [2] ())

console.log([
  "a",
 {type: "array"}, 
 function() { return "alo"},
] [1].type)

// Transformar uma cadeia de caracteres em elementos de um array
let word3 = 'manipulação'
console.log(Array.from(word3)) // cada caractere virou um elemento do array




// Manipulando Arrays

let techs = ['html', 'css', 'js']

// adicionar um item no fim
techs.push('nodejs')
// adicionar no começo
techs.unshift('reactjs')
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
console.log(techs.slice(1, 3)) // o primeiro valor o índice e o segundo o número real de elementos // todos os outros com exceção deste modificam o array, por isso foi enlvolvdio num console.log, ele vai dar como retorno da função o que está pedindo
// remover 1 ou mais items em qualquer posição do array
// techs.splice(1, 2) primeiro o índice a partir, segundo quantos elementos quero remover
// techs.splice(1,0,'sql') // colocando 0 como parâmetro, ele adiciona elementos ao invés de remover, a partir do índice informado, e o último parâmetro o indice a ser adicionado
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)
techs.splice(index, 1)
console.log(techs)

// combinando arrays
const primeiro = [1, 2, 3]
const segundo = [4, 5, 6]
const combinado = primeiro.concat(segundo)