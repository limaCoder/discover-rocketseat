SELECT * FROM funcionarios JOIN departamentos ON departamentos.id_dept = funcionarios.id_departamento;
SELECT * FROM funcionarios JOIN departamentos ON departamentos.id_dept = funcionarios.id_departamento WHERE departamentos.id_dept = 2;
SELECT funcionarios.nome, funcionarios.cpf, departamentos.descricao FROM funcionarios JOIN departamentos ON departamentos.id_dept = funcionarios.id_departamento WHERE departamentos.id_dept = 2;

/* Alias */
SELECT func.nome as "Nome", func.cpf as "CPF", dept.descricao as "Departamento" FROM funcionarios as func JOIN departamentos as dept ON dept.id_dept = func.id_departamento WHERE dept.id_dept = 2;

/* Left Outer Join - utilizado para exibir os dados compartilhados entre ambas as tabelas e também os dados da tabela à esquerda que não têm relacionamento com a tabela da direita */
SELECT * from funcionarios LEFT OUTER JOIN departamentos ON funcionarios.id_departamento = departamentos.id_dept;