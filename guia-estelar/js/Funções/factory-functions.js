// factory functions encapsulam a informação dentro de um método que cria objetos

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
  return {
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar() {
      console.log('Fazendo ligação...')
    }
  }
}

const celular1 = criarCelular('Zenfone', 5.5, 5000);
console.log(celular1)

// factory and constructor function are the same thing!