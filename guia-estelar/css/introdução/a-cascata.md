# A Cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo.

É levado em consideração 3 fatores

1. Origem do estilo
2. Especificidade
3. Importância

### Origem do estilo

inline > tag style > tag link

### Especificidade

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

valor - 0. Universal selector, combinators e negation pseudo-class (:not())
valor - 1. Element type selector e pseudo-elements (::before, ::after)
valor - 10. Classes e attribute selectors ([type="radio"])
valor - 100. ID selector
valor - 1000. inline

### A regra important!

* cuidado, evite o uso
* não é considerado uma boa prática
* quebra o fluxo natural da cascata
* usar somente em bibliotecas de outros