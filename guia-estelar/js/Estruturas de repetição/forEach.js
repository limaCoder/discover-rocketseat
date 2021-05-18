//forEach
const numeros = [1, 2, 3, 4 , 5];

numeros.forEach((numero, indice) => {
  console.log(numero, indice)
})

for(numero of numeros) {
  console.log(numero)
}