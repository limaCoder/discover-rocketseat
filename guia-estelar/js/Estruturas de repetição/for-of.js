// for of // é uma estrutura de repetição que só funciona em arrays ou dados transformados em arrays

let name = 'Kleber' // dado do tipo string

let names = ['João', 'Paulo', 'Pedro'] // array de strings

for(let char of name) { // como name é um dado do tipo string, vai transformar 
  //cada caractere em um elemento de array
  console.log(char) // ficando ['K', 'l', 'e', 'b', 'e', 'r' ], e exibindo cada
  // uma das letras
}

for(let name of names) {
  console.log(name) // vai exibir todos os elementos do array names, ou seja, 
  // cada cada nome(name) de(of) nomes(names)
  // ficando: João, Paulo, Pedro
}

function vezesLetraAparece(frase, letra) {
  var resultado = 0; // é um incremento que vai ser usado para somar a quantidade
  // de vezes que a letra aparece na frase

  for (const letraAtual of frase) { // pegando cada caractere do dado string 'frase' que acaba aqui
    // de ser convertido em um array com o comando 'of'
    if (letraAtual === letra) { // se a letraAtual corresponder a letra que você inseriu no parâmetro
      // 'letra', continua a execução
      resultado++; // vai incrementar a quantidade das vezes que a letra aparece, com o if acima a letra
      // vai ser encontrada, e aqui incrementada caso ela apareça de novo na frase, assim vai somando se o 
      // 'e' apareceu 2, 3, 4 vezes e assim por diante
    }
  }
  return resultado; // retornando o dado 'resultado' que foi transformado acima no if
}

console.log(vezesLetraAparece('isso é uma frase', 'e')) // 1 vez