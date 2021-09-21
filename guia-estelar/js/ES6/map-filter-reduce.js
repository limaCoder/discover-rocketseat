/* 
Map, Filter e Reduce retornam novos arrays e mantêm o original
*/

const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400"
];

const precosFiltro = precos.filter(preco => {
  return Number(preco.replace('R$ ', ''))
})

console.log(precosFiltro)

const precosNumeros = precosFiltro.map(preco => {
  return Number(preco.replace('R$ ', ''))
})

console.log(precosNumeros)

const total = precosNumeros.reduce((acc, item) => {
  return acc + item
})

console.log(total)