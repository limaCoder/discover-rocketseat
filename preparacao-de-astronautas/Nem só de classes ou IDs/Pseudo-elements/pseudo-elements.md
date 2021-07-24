# Pseudo-elements

Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS

``::pseudo-element-name`

* ::before
* ::after
* ::first-line

// Para o before ou o after funcionarem, eles precisam da propriedade content: "" para funcionar

### Combinando pseudo-classes com pseudo-elements

```css 

p:nth-of-type(2)::first-line {
  font-weight: bold;
}

```

<p>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis odio dolorem quam tempore maxime illo temporibus fuga ea aut similique? Quibusdam vitae et obcaecati necessitatibus facilis fugit quod, sint iure.
</p>
<p>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis odio dolorem quam tempore maxime illo temporibus fuga ea aut similique? Quibusdam vitae et obcaecati necessitatibus facilis fugit quod, sint iure.
</p>
<p>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis odio dolorem quam tempore maxime illo temporibus fuga ea aut similique? Quibusdam vitae et obcaecati necessitatibus facilis fugit quod, sint iure.
</p>