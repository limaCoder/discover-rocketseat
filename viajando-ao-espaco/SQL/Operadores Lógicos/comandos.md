SELECT * FROM aluno WHERE nome like 'J%' AND matricula > 1;
SELECT * FROM aluno WHERE nome like 'J%' OR matricula > 1;

SELECT * FROM funcionarios WHERE id_funcionario BETWEEN 4 AND 7;
SELECT * FROM funcionarios WHERE id_departamento IN (1, 3, 4);
SELECT * FROM funcionarios WHERE id_departamento IS NULL;
SELECT * FROM funcionarios WHERE id_departamento IS NOT NULL;