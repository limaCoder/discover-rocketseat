# @import

- Quando é possível importar arquivos SASS em outros para compilar em um só;
- Melhora a organização. Conceito de componentes;
- Otimiza as requests: o site fica mais otimizado com menos arquivos para carregar;
- A ordem importa;
- Uso de partials: _arquivo.scss;

@import "colors.scss"
@import "typography.scss"

Partials (_ na frente do arquivo - impede o arquivo de gerar arquivos individuais css e map.css)
@import "layout.scss"
@import "_button.scss"

# Variáveis

- Criação de variáveis para cores, componentes e etc;
- Ajuda na organização e consistência no design;
- Também pode ser utilizado para propriedades CSS.

$preto: #000;
@branco: #fff;

$gray1: #111;
$gray2: #555;

$box-shadow-blue: [...]

# Aninhamento ou Nesting

- Criação de efeito cascata do CSS com mais facilidade;
- Pode emendar n cascatas;
- Facilita na identificação de qual elemento está estilizando;
- Nesting de tags e propriedades.

ul {
  li {
    list-style: none;

    a {
      text-decoration: none;

    &:hover {
      color: #000;
    }
    }
  }
}

# @mixin & @content

- Criação de funções pré-definidas
- Aproveitamento de código
- Criação de sistemas mais completos
- Facilidade para adicionar prefixos
- Facilita na criação de função pde responsividade

@mixin nome_mixin($cor: #FAFAFA) {
  font-size: 36px;
  color: #cor;
  @content [1] <!-- onde será adicionado o conteúdo a mais de onde importar o mixin -->
}

h1 {
  @include nome_mixin(#FFF) {
    line-height: 110%; [2] <!-- inserindo o conteúdo a mais do mixin importado -->
  }
}

# @if & @else e operadores

- Criação de estrturas encadeadas
- Dá mais elasticidade aos @mixins
- Capacidade de criar cenários diferentes de estilização

@if &layout==light {
  $btg-color: #EFEFEF;
  $text-color: #101010;
}
@else if &layout == dark {
  $bg-color: #101010;
  $text-color: #EFEFEF;
}

# @for, @while e @each

- Criação de estruturas de repetição
- Dá mais possibilidades aos @mixins & @functions

@for $i through 12 {
  .grid-#{$i} {
    width: 72px * $i;
  }
}

.grid-1 {         .grid-2 {
  width: 72px       width: 144px;
}                 }

# @function & @return

- Criação de estruturas para reaproveitar códigos;
- Um bloco de código que retorna um valor.

@function grid($col, $total: 12) {
  @return ($col / $total) * 100%;
}

grid(3) >>  .grid-3 {
              width: 25%;
            }

darken(#5fe36a, 50%)
transparentize(#5fe37a, 0.7)
lighten(@fe36a, 20%);

