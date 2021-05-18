// callback function

function sayMyName(name) {
  console.log('antes de executar a função callback')

  name()

  console.log('depois de executar a callback')
}

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)

// callback é uma função que está passando como parâmetro outra função

// é como se fosse fazer isso:
function sayMyName() {
  console.log('antes de executar a função callback')

  function name() {
    console.log('estou em uma callback')
  }
  name()

  console.log('depois de executar a callback')
}

sayMyName() // mas na callback a função foi criada aqui fora para ser chamada lá dentro