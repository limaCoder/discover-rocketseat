// REST = resto...

function soma(a, b, ...params) {
  return params
  // return params.reduce((total, next) => total + next)
}

console.log(soma(1, 3 , 4, 4, 5, 6, 7))

const usuario3 = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rockeseat'
}


const { nome, ...resto } = usuario3

console.log(nome)
console.log(resto)

const arr = [1, 2, 3, 4]

const [a, b, ...c] = arr

console.log(a)
console.log(b)
console.log(c)

// SPREAD = espalhar...

const usuario1 = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat',
}

const usuario2 = { ...usuario1, nome: 'Gabriel' }

console.log(usuario2)

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2];

console.log(arr3)