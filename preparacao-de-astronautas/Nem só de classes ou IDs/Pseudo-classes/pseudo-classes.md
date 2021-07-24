# Pseudo-classes

É um tipo de seletor que irá adicionar um elemento que estiver em um estado específico.

Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em cima dele.

Pseudo-classes começam com 2 pontos seguido do nome da pseudo class
``:pseudo-class-name`

## Selecionando elementos com pseudo-classes

* :first-child

```css
 ul li:first-child {
   font-weight: 700;
 }
```

// não vai funcionar no exemplo abaixo, pois o li precisa de fato ser o primeiro
filho do elemento ul, se não o estilo é aplicado no h3
<ul>
  <h3>Exemplo</h3>
  <li>exemplo</li>
  <li>exemplo</li>
  <li>exemplo</li>
</ul>

// para isso ser resolvido, temos a pseudo-classe como solução abaixo:
* :nth-of-type() // usar sempre esse

```css
 ul li:nth-of-type(1){
   font-weight: 700;
 }
```

<ul>
  <h3>Exemplo</h3>
  <li>exemplo</li>
  <li>exemplo</li>
  <li>exemplo</li>
</ul>

* :nth-child() // ele funciona como o first-child que ira considerar todos os elementos filhos

```css
 ul li:nth-child(1){
   font-weight: 700;
 }
```

// mesmo que no CSS esteja selecionando o li, o h3 é o primeiro filho de ul, logo o estilo será aplicado para ele,
então o primeiro li será considerado na posição 2 para ser selecionado
<ul>
  <h3>Exemplo</h3>
  <li>exemplo</li>
  <li>exemplo</li>
  <li>exemplo</li>
</ul>

## Selecionando elementos pares ou ímpares com pseudo-classes

Use as últimas pseudo-classes apresentadas, e dentro dos parênteses coloque o valor "even" ou "odd".

Exemplo:

```css
 ul li:nth-child(odd){ // par
   color: gray;
 }

ul li:nth-child(even){ // ímpar
   color: red;
}
```

ou

```css
 ul li:nth-of-type(odd){ // par
   color: gray;
 }

ul li:nth-of-type(even){ // ímpar
   color: red;
}
```

<ul>
  <li>exemplo</li>
  <li>exemplo</li>
  <li>exemplo</li>
</ul>

----------------------------------------------------------------------------------

## Ações do usuário

* :hover - usado quando o usuário passa o mouse por cima do elemento
* :focus - geralmente usado para inputs, quando o input fica focado ao ser clicado pelo mouse

## Atributos

* :disabled
* :required