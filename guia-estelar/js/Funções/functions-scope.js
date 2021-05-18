// function scope
let subject = 'create video'; // [1] - não são a mesma coisa

function createThink(subject) { // [0] - não são a mesma coisa
  subject = 'study';
  return subject
}

console.log(subject)
console.log(createThink(subject))