/* 
Fetch - Envia requisições assíncronas para o servidor. Serve para acessarmos 
ou escrever dados em APIs externas. O fetch retorna uma Promisse
*/

/* 
Assíncrono - significa que o código vai ficar rodando, e se o servidor estiver 
lento, ele não vai travar o restante do código, rodando no seu próprio tempo em
background.
*/


/* o then ocorre após a função ser resolvida */
const requisicao = fetch('https://swapi.dev/api/people').then(res => {
  return res.json().then(data => {
    console.log(data)
  })
})

/* a mesma forma de escrever o código acima com async e await */
/* assim, o código irá esperar a promisse resolver antes de continuarmos com o código, ao invés de executar imediatamente em background */
/* lembrando que o async await só serve para promisses */
async function fetchStarWars(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  return jsonBody;
}

const requisicao = fetchStarWars('https://swapi.dev/api/people');