// throw

function sayMyName(name = '') {
  if (name === '') {
    /* throw new Error('Nome não é necessário') - forma comum de lançar erro */
    throw 'Nome é obrigatório' // se não tiver um try catch, as linhas de códigos seguinte não são executadas e o programa para aqui no erro, acabando a aplicação inteira
  }

  console.log('depois do erro')
} 

sayMyName() // uncaught - não pego pelo try catch

console.log('após a função de erro') // como a aplicação parou no erro, esse código não será chamado

// try...catch
try {
  sayMyName()
} catch(e) {
  console.log(e)
}

console.log('após a função de erro') // com o try catch o fluxo da aplicação continua rodando e não para a aplicação quando dá o throw