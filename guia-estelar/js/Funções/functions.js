// Functions servem para agrupamento de códigos e reutilização desse código
// quantas vezes for necessário

// criar um aplicativo de frases motivacionais

// declaration - declaração da função
// function statement
function createPhrases() {
  console.log('Estudar é muito bom')
  console.log('Paciência e persistência')
  console.log('Revisão é mãe do aprendizado')
}

// executar a função
// rodar, chamar, invocar
// execute, run, call, invoke
createPhrases()
createPhrases()
createPhrases()
createPhrases()

console.log('fim do programa')

/* existem três formas de criar funções e todas abaixo produzem o mesmo resultado! 
Apenas a Arrow Function contém algumas particularidades */

//a forma padrão: 
function create() {

}

// armazenando em uma constante, sendo chamada assim de função anônima / function expression
const create = function() {

}

// ou com arrow function / também chanada de express function
const create = () => {

}

// Função sem retorno
function /*palavra reservada para definir função*/  imprimirSoma(a, b) /* os valores 
dentro do parênteses são chamados de parâmetros de entrada*/ {
  console.log(a + b)
}

imprimirSoma(2, 3) /* os valores passados dentro dos parênteses da chamada da função 
são chamadas de argumentos, e os argumentos atribuem respectivamente valores ao parâmetros
de entrada, então na função imprimirSoma, os parâmetros 'a' e 'b' são transformados em 
2 e 3 com a chamada da função aqui*/

imprimirSoma(2) // o paramêtro 'b' ao não receber valor, é considerado Undefined, logo o resultado é NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // Vai somar os dois primeiros parâmetros e ignorar o resto, já que não foram passados os parâmetros

imprimirSoma() // os dois parâmetros não receberam valor, logo são undefined, logo o resultado é NaN

// Função com retorno
function soma(a, b = 0 /* definindo um valor padrão*/ ){
  return a + b //  O return é usado dentro de funções, para indicar o que a função irá retornar ao final de sua 
  // execução.
}

// soma(2, 3) - com return na função, não funciona fora do console.log
console.log(soma(2, 3))
console.log(soma(2)) // 2 + 0 = 2 
console.log(soma()) // Como 'a' não teve um valor padrão definido, diferente de 'b', o resultado é NaN

const sum = function(number1, number2) {
  total = number1 + number2; // não faça isso, sempre usar a palavra chave de variável antes, como let ou const
  return total
}


// Função é um liquidificador
function fazerSuco(suco1, suco2) {
  return 'fazer suco de:' + suco1 + suco2;
}

const copo = fazerSuco('banana', 'maça')
console.log(copo)