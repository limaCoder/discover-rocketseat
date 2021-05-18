// como não é possível usar includes() em objetos, usamos find

const marcas = [
  {id: 1, nome: 'a'},
  {id: 2, nome: 'b'},
];

const marca = marcas.find((e) => {
  return e.nome === 'a' 
});

console.log(marca)