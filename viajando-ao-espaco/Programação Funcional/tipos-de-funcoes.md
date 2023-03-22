## Funções independentes

* Deverá ter ao menos 1 argumento
* Deverá retornar algo
* Nada que acontecer lá dentro afeta o mundo externo
  * dados imutáveis
  * não guardar estado
* Não faremos uso de loops ( for, while ), mas se houver necessidade de tal, usaremos recursão (a função chama ela mesma)

Exemplo:
```js
const random = (number, Math) => Math.floor(Math.random() * number);

// recursive
// Find the factorial of a number
const factorial = x => {

  // if number is 0
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}
```

## Funções puras

* Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento
* Não deverá sofrer nenhuma interferência do mundo externo a ela
* Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente
* Não terá nenhum efeito colateral no seu código
  * Não irá modificar nenhum dado.
  * Não irá guardar nenhum estado.

```js
// Função impura

// Exemplo 1: está dependendo de dado externo
// que não foi passado como parâmetro
function calculateCircumference(radius) {
  return Math.PI * (radius + radius)
}

let person = {
  name: 'Rafael Camarda',
  age: 'jovem'
}

function changeName(name) {
  person.name = name
}

// função pura

// Exemplo 1
const calculateCircumference = function (pi, radius) {
  return pi * (radius + radius)
}

// com arrow function
const calculateCircumference = (pi, radius) => pi * (radius + radius)

// Exemplo 2
const changePersonName = (person, name) => {...person, name}
```

## First-class function 

* Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções
* A função poderá ser entendida como uma variável

```js
const sayMyName = () => console.log('Mayk');
const runFunction = fn => fn();

runFunction(sayMyName)
runFunction(() => console.log('discover'));

console.log(runFunction(Math.random))
```

## Higher-order function

* Funções que recebem funções como argumentos
* Funções que poderão retornar outras funções

```js
// Exemplo com .map() JS
const numbers = [2, 4, 8, 16];

const square = n => n * n;

const squaredNumber = numbers.map(square);

// Exemplo de um retorno de função
// (currying ou aplicação parcial de função)
const pause = wait => fn => setTimeout(fn, wait);

pause(600) ( () => console.log('waiting 600ms') )

const wait200 = pause(200);
const wait1000 = pause(1000);

wait200(() => console.log('waiting 200ms');
wait1000(() => console.log('waiting 1s');
```

## Composição de funções

* Um encadeamento de funções
* Uma função que retorna um dado e vai para outra função, que retorna um dado e vai para outra função, que retorna...