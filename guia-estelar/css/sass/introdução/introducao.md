# O que é o SASS?
  * É um pré-processador de CSS. Melhora a performance na programação CSS. Adiciona variáveis, funções...

  * O SASS dá um boost no CSS com skills de linguagem de programação. Mas não faz nada além do que o CSS puro não faça!

# O uso do SASS vai aumentar sua produtividade no CSS

# Vantagens
  * Funções
  * Variaáveis
  * Facilidades com pseudo elements e estados
  * Melhora a compatibilidade dos browser (-moz -webkit)

# SASS vs SCSS
São duas sintaxes diferentes do SASS com as mesmas funcionalidades. O SASS era originalmente a sintaxe oficial e ela é um pouco diferente da sintaxe do CSS, sem chaves e pontos e virgulas. A sintaxe SCSS agora é a oficial e é mais parecida com a sintaxe do CSS. Na prática a escolha entre as duas é uma questão de gosto. Olhe abaixo um exemplo da sintaxe SASS e outro da sintaxe SCSS

### Exemplo da Sintaxe SASS:
```scss (sass)
#main
    color: blue
    font-size: 0.3em

    a
        font:
            weight: bold
            family: serif
        &:hover
            background-color: #eee
```

### Exemplo da Sintaxe SCSS:
```scss
#main {
    color: blue;
    font-size: 0.3em;

    a {
        font: {
            weight: bold;
            family: serif;
        }
        &:hover {
            background-color: #eee;
        }
    }
}
```

Esses códigos são na realidade a mesma coisa só que em sintaxes diferentes. Perceba que usando SASS o que conta é a identação, não existem chaves nem pontos e virgulas. Já usando SCSS tudo fica muito parecido com CSS, você tem chaves e pontos e virgulas. Mas perceba que as funcionalidades do SASS como nesting existem nas duas sintaxes.