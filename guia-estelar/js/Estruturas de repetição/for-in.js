// for...in - faz o loop no objeto, pegando suas propriedades/chaves/keys
// ele também pega os índices de arrays

let person = {
  name: "John",
  age: 30,
  weight: 88.6
}

for(let property in person) {
  console.log(property)
  console.log(person[property])
  console.log(person["name"])
  console.log(person.name)
}