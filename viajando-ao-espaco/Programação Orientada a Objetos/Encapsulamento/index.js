/* 
  Conceito no qual os atributos e métodos são escondidos e não podem ser acessados 
  fora do objeto, assim escondendo detalhes de implementação e adicionando uma 
  camada de segurança para o objeto, colocando em uma cápsula.
*/
/*  */

class Poligono {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  /* encapsulando o método com # */
  get area() {
    return this.#calcularArea()
  }

  #calcularArea() {
    return this.altura * this.largura;
  }
}

// criar o objeto
let poligono = new Poligono(50, 60);
console.log(poligono)