# Scope

* Escopo determina a visibilidade de alguma variável no Js

# Block Statement = Declaração de Bloco
// vamos inciar um bloco
{
  // aqui dentro é um bloco e posso colocar qualquer
  //código
} // aqui fechamos o bloco

O bloco, também criará um novo escopo. Chamamaos de 
'block-scoped'

## var
// var é gloval e, também local
// var é global e poderá funcionar fora de um escopo de bloco
// var x [2] 
console.log('existe x antes do bloco? ', x)

{ // escopo local
  var x = 0 // com var é feito um hoisting como se a variável fosse criada antes
  // do console.log de cima, mas sem valor definido [1]
  // x = 0 [3]
}

console.log('> existe x depois do bloco', x) // existe, pois com var a variável declarada no escopo local vai para o global 

## let e const
// const e let são locais e só funcionam no escopo onde foram criadas
console.log('> existe y antes do bloco?', y) // não existe hoisting

{
  let y = 0;
}

console.log('> existe x depois do bloco?', y) // não existe

## let e const
let y = 2;

{
  let y = 0;
  console.log('> existe y?', y) //o valor nesse escopo será outro, como se fosse 
  // outra varíavel devido a visibilidade do escopo [2]
}

console.log('> existe y depois do bloco?', y) // o valor nesse escopo será um [1]

## let e const
let y = 2;

{
  y = 0; // nesse caso o valor da variável é reatribuida, pois em bloco ele irá
  // subir o bloco de cima para acessar a variável, quantos blocos acima dele 
  // forem necessários. com const isso já não funciona, já que o valor dela é
  // constante como o próprio nome sugere 
  console.log('> existe y?', y)
}

console.log('> existe y depois do bloco?', y)

