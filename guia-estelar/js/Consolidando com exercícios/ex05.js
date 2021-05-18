// Trocando valores entre variáveis
let a = 'vermelho';
let b = 'azul';
let c = a;
a = b;
b = c;

console.log(a)
console.log(b)


// Exibindo números ímpares e pares
function exibirTipo(limite) {
  for(i = 0; i <= limite; i++) {
    if(i % 2 === 0) {
      console.log(i, 'PAR')
    } else
        console.log(i, 'ÍMPAR')
  }
}

exibirTipo(2)

//

// Criar uma função para encontrar somente propriedades String no objeto

const filme = {
  nome: 'Vingadores: Guerra Infinita',
  ano: 2018,
  diretor: 'Irmãos Russo',
  personagem: 'Thor'
}

function exibirPropriedade(obj) {
  for(prop in obj) {
    if(typeof obj[prop] === 'string') {
      console.log(prop, obj[prop])
    }
  }
}

exibirPropriedade(filme)