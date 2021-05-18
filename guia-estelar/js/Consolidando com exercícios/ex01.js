/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema númerico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/

function notaEscolar(nota) {
  let scoreA = nota >= 90 && nota <= 100;
  let scoreB = nota >= 80 && nota <= 89;
  let scoreC = nota >= 70 && nota <= 79;
  let scoreD = nota >= 60 && nota <= 69;
  let scoreF = nota < 60 && nota >= 0;
  let scoreFinal

  if(scoreA) {
    scoreFinal = 'A'
  } else if(scoreB) {
    scoreFinal = 'B'
  } else if(scoreC) {
    scoreFinal = 'C'
  } else if(scoreD) {
    scoreFinal = 'D'
  } else if(scoreF) {
    scoreFinal = F
  } else {
    scoreFinal = 'Nota inválida'
  }

  return scoreFinal
}

console.log(notaEscolar(90))