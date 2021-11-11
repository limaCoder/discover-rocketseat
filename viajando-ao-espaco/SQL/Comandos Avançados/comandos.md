/_ Comandos avançados _/
SELECT _ FROM aluno ORDER BY nome;
SELECT _ FROM aluno ORDER BY nome DESC;
SELECT _ FROM aluno LIMIT 2;
SELECT _ FROM funcionarios LIMIT 4 OFFSET 4;
SELECT count(id_departamento) FROM funcionarios;
SELECT id_departamento, count(id_departamento) FROM funcionarios GROUP BY id_departamento;

SELECT departamentos.descricao, count(departamentos.id_dept)
FROM funcionarios JOIN departamentos
ON departamentos.id_dept = funcionarios.id_departamento
GROUP BY departamentos.id_dept;

/_ o Where não pode ser usado em agrupamentos com GROUP BY, nesse caso é utilizado o HAVING _/
SELECT departamentos.descricao, count(departamentos.id_dept)
FROM funcionarios JOIN departamentos
ON departamentos.id_dept = funcionarios.id_departamento
GROUP BY departamentos.id_dept
HAVING count(departamentos.id_dept) > 1;
