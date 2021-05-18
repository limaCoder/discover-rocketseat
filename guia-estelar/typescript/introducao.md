# O que é o Typescript?

 . É um superset do Javascript
 . Adiciona novas features ao Javascript
 . Basicamente, tipagem estática!
 . Compila para Javascript
 . Permite adoção gradual (arquivos .ts convivem com .js)

# Por que usar Typescript?

```ts

function sum(a, b) {
  return a + b;
}

sum(1, 2) // 3
sum ('1', '2') // 12 opa! o typescript evita esses resultados inesperados!

console.log( 4 / []) // avisa se estiver fazendo algo errado


/* Já funciona como uma espécie de documentação */

type Platform = "Windows" | "Mac OS" | "Linux"
type Feature = "Single Player" | "Multiplayer" | "Co-op"

interface GameDetails {
  id: string;
  title: string;
  description: string;
  platforms: Platform[]
  features: Feature[]
}

/* Deixa sua IDE extremamente poderosa com intellisense */

```

# Desvantagens do Typescript

 . Necessita ser compilado (mais passos no tooling)
 . Aprendiado inicial dos tipos e boas práticas
 . Erros nem sempre muito claros ou então muito grandes