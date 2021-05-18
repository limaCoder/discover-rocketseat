// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xff0

// array (type[])
let items: string[] // informando o tipo de dado no array
items = ["foo", "bar"]
let itemsNumero: number[]
itemsNumero = [1, 2]

let values: Array<number> // generic // uma 2°forma de tipar arrays
values = [1, 2, 3]

// tuple = array onde informamos a quantidade de elementos e o tipo dele
let title: [number, string, string]
title = [1, "foo", "bar"]

// enum = cria um conjunto de chave e valor
enum Colors {
  white = '#fff',
  black = '#000'
}

// any (qualquer coisa) NÃO É LEGAL!
let coisa: any;
coisa = [1];

// void (vazio)
function logger(): void {
  console.log("foo")
}

// null / undefined
type Bla = string | undefined;

// never = nunca haverá um retorno
function error():never {
  throw new Error("error");
}

// object = tudo aquilo que não é string, number, boolean ou array, ou seja, qualquer um desses tipos primitivos, um objeto
let cart:object;

cart = {
  key: "fi"
}

// Type Inference
let message2 = "mensagem definida";
// let message2:string = "mensagem definida"
message2 = "string nova";