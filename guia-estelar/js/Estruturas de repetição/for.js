// Estrutura de repetição
// for

for(let i = 1; i <= 10; i++) {
  console.log(i)
}

for(let i = 100; i > 10; i--) {
  console.log(i)
}

for(let i = 100; i > 10; i--) {
  if(i === 50) {
    break;
  }

  console.log(i)
}

for(let i = 10; i > 10; i--) {
  if(i === 5) {
    continue; // ignora o 5
  }

  console.log(i)
}