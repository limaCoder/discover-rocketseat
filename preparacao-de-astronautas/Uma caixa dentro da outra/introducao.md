# Box Model

- Fundamental para fazer layouts para a web
- Maior facilidade para aplicar o CSS

## O que é?

Uma caixa retangular.
Essa caixa possui propriedades de uma caixa (2D)

- Tamanho (largura x altura) width | height
- Conteúdo content
- Bordas border
- Preenchimento interno padding
- Espaços fora da caixa margin

*Cada elemento na sua página, será considerado uma caixa.*

--------------------------------------------------------------------------------

## box-sizing

Como será calculado o tamanho total da caixa?

- content-box|border-box

```css
div {
  width: 100px; /* com o box-sizing, o conteúdo continuará sendo 100px mesmo com adição de padding, fazendo os cálculos a partir da borda */
  height: 100px;
  border: 1px solid red;
  margin: 10%;
  padding: 0 20px;

  box-sizing: border-box;
}
```
--------------------------------------------------------------------------------

## display: block vs display: inline

- Como as coisas se comportam em relação às outras cauxas
- Comportamento externo das caixas

**block**
- Ocupa toda a linha, colocnado o próximo elemento abaixo desse
- width e height são respeitados
- padding, margin, border irão funcionar normalmente.

**inline**
- Elemento ao lado do outro
- Width e height não funcionam
- Somente valores horizontais de margin, padding e border

**exemplos**
block: ``<p> <div> <section>`, todos os headings `<h1><h2>...`
inline: `<a> <strong> <span> <em>`

--------------------------------------------------------------------------------

## margin 

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- values: `<length>` | `<percentage>` | auto

```css
div {
  /* shorthand */
  margin: 12px 16px 10px 4px;
  margin: 12px 16px 0;
  margin: 8px 16px:
  margin: 8px;
}
```
  * Cuidado com margin collapsing (top se ajunta ao bottom)

  * Os navegadores por padrão adicionam 8px de margin e padding nos elementos, então é recomendado zerá-los no seletor *

--------------------------------------------------------------------------------

## padding 

Preenchimento interno da caixa

- padding-top | padding-right | padding-bottom | padding-left
- values: `<length>` | `<percentage>` | auto

```css
div {
  /* shorthand */
  padding: 12px 16px 10px 4px;
  padding: 12px 16px 0;
  padding: 8px 16px:
  padding: 8px;
}
```

  * Padding poderá causar diferença na largura de um elemento

--------------------------------------------------------------------------------

## border (e outline)

As bordas da caixa

- value: `<border-style>` | `<border-width>` | `<border-color>`
  - style: solid | dotted | dashed | double | groove | ridge | inset | outset
  - width: `<length>`
  - color: `<color>`

```css
div {
  /* shorthand */
  border-top: solid 2px; /* top | right | bottom | left */

  /* style */
  border: solid;

  /* width <length> | style */
  border: 2px dotted;

  /* style | color */
  border: outset #f33;

  /* width | style | color */
  border: medium dashed green;
}
```

### E outline?

- difere em 4 sentidos:
  - Não modifica o tamanho da caixa, pois não é parte do box model
  - Poderá ser diferente de retangular
  - Não permite ajustes individuais
  - Mais usado pelo user agent para acessibilidade
  - usado pelos elementos input