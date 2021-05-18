/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
  * receitas: []
  * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com 
com saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {
  incomes: [2500, 3200, 250.43, 360.45],
  expenses: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array) {
  let total = 0;

  for(value of array) {
    total+= value
  }

  return total
}

function calculateBalance() {
  let calculateIncomes = sum(family.incomes);  
  let calculateExpenses = sum(family.expenses);
  let total = calculateIncomes - calculateExpenses;
  
  let itsOk = total >= 0

  let balance = 'negativo'

  if(itsOk) {
    balance = 'positivo'
  }

  console.log(`O seu saldo está ${balance}: R$${total.toFixed(2)}`)
}

calculateBalance()