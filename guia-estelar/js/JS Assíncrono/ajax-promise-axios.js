/* AJAX significa Asynchronous Javascript e XML. É o uso do objeto XMLHttpRequest 
para se comunicar com os scripts do lado do servidor.

No JS ao invés de recarregar a página para buscar novas informações do servidor,
conseguimos requisitar novas informações do servidor. */

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/limaCoder');
xhr.send(null);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText)) // transformando a resposta JSON recebida em objeto JS
  }
}

/* ---------------------------------------------------------------------------------- */

/* Promises são códigos que não vão influenciar na linha do tempo dp JS. Basicamente,
são funções que vão devolver o resultado de "sucesso" ou "erro".

É um sistema de cascata de possibilidades que você pode colocar funcionalidades quando algo
der errado ou algo der certo. */

var minhaPromise = function() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/limaCoder')
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro na requisição')
        }
      }
    }
  })
}

minhaPromise()
  .then(function(response) {
    console.log(response)
  })
  .catch(function(error) {
    console.log(error)
  })

/* ---------------------------------------------------------------------------------- */

/* Axios é um encapsulamento do XMLHttpRequest(). Ele vai nos ajudar a fazer exatamente
a mesma coisa que já fazemos até aqui, sód que de maneira mais fácil. */

axios.get('https://api.github.com/users/limaCoder')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error)
  })