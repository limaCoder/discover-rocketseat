// function hoisting

sayMyName()

function sayMyName() {
  console.log('Mario'); // com uma function statement o hoisting é ocasionado
}

// 

sayMyName()

const sayMyName = function() {
  console.log('Mario'); // com uma função anônima não ocorre hoisting
}