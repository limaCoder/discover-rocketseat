/* sinal de igual (=) usado para números */
SELECT * FROM aluno WHERE matricula = 1;

/* 'like' usado para string */
SELECT * FROM aluno WHERE nome like 'M%';

SELECT responsavel FROM aluno where nome like '%g%';

SELECT * FROM aluno WHERE matricula > 1;
SELECT * FROM aluno WHERE matricula < 2;
SELECT * FROM aluno WHERE matricula >= 2;
SELECT * FROM aluno WHERE matricula <= 2;

/* operador <> - não igual a */
SELECT * FROM aluno WHERE matricula <> 2;

SELECT * FROM aluno WHERE matricula != 2;