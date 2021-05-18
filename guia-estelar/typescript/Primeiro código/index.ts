let num1 = document.getElementById('num1') as HTMLInputElement
let num2 = document.getElementById('num2') as HTMLInputElement
let button = document.getElementById('button')!

function sum(a: number, b: number) {
  return a + b;
}

button.addEventListener('click', function() {
  console.log(sum(Number(num1.value), Number(num2.value)))
})

/* npx tsc index.ts --watch = para compilar */

/* npx tsc --init = para criar o arquivo de configuração tsconfig.json */

/* com o arquivo tsconfig.json, para compilar basta rodar npx tsc  */