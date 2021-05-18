// Máximo entre dois valores

/* function maxValue(number1, number2) {
  if(number1 > number2) {
    return number1
  } else return number2
} */

/* function maxValue(number1, number2) {
  if(number1 > number2) {
    return number1
  } 
  return number2
} */

function maxValue(number1, number2) {
  return number1 > number2 ? number1 : number2;
}

let valorMaior = maxValue(5, 10)
console.log(valorMaior)

//

// FizzBuzz 
// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => FizzBuzz
// Não divisível por 3 ou 5 => entrada
// Não é um número => 'Não é um número'

function fizzBuzz(entrada) {
  if(entrada % 3 === 0 && entrada % 5 === 0 ) return 'FizzBuzz'
  else if(entrada % 3 === 0) return 'Fizz'
  else if (entrada % 5 === 0) return 'Buzz'
  else if (typeof entrada !== 'number' ) return 'Não é um número'
  return entrada
}

console.log(fizzBuzz('a'))

// 

// Medidor de velocidade
// Velocidade máxima de até 70 km
// a cada 5km acima do limite você ganha 1 ponto
// Math.Floor()
// caso pontos maior que 12 => "Carteira Suspendida"

function verificarVelocidade(velocidade) {
  const velocidadeMaxima = 70;
  const pontosPorKm = 5;

  if(velocidade <= velocidadeMaxima) {
    console.log('OK')
  } else {
    const pontos = Math.floor(((velocidade - velocidadeMaxima) / pontosPorKm));

    if(pontos > 12)
      console.log('Carteira Suspensa')
    else {
      console.log('Pontos', pontos)
    }
  }
}

verificarVelocidade(80)

//

// Criar função somar que retorna a soma de todos os múltiplos de 3 e 5

function somar(limite) {
  let multiplosDe3 = 0;
  let multiplosDe5 = 0;

  for(i = 0; i <= limite; i++) {
    if(limite % 3 === 0)
      multiplosDe3 += i
    else if(limite % 5 === 0)
      multiplosDe5 += i
  }

  console.log(multiplosDe3 + multiplosDe5)
}

somar(10)