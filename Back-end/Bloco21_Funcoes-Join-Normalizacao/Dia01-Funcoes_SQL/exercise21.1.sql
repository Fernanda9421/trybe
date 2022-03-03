-- Exercícios utilizando a tabela employees, do banco de dados hr.
-- Maior salário:
SELECT MAX(salary) FROM employees;
-- Diferença entre o maior e o menor salário:
SELECT MAX(salary) - MIN(salary) FROM employees;
-- Média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente
SELECT JOB_ID, AVG(salary) AS "Media_salarial" FROM employees
GROUP BY JOB_ID
ORDER BY Media_salarial DESC;
-- Quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias
SELECT SUM(salary) FROM employees;
-- Maior, menor, soma e média dos salários, com 2 casas decimais
SELECT 
	ROUND(MAX(salary), 2) AS "Maior salário",
    ROUND(MIN(salary), 2) AS "Menor salário",
    ROUND(SUM(salary), 2) AS "Soma dos salários",
    ROUND(AVG(salary), 2) AS "Média salarial"
FROM employees;

SELECT
	MAX(SALARY),
    MIN(SALARY),
	SUM(SALARY),
    ROUND(AVG(SALARY), 2)
FROM employees;
-- Quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG )
SELECT COUNT(*) FROM employees
WHERE JOB_ID = "IT_PROG";
-- Quantidade de dinheiro necessária para efetuar o pagamento de cada profissão
SELECT JOB_ID, SUM(SALARY) AS "total" FROM employees
GROUP BY JOB_ID;
-- Quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras 
SELECT JOB_ID, SUM(SALARY) AS "total" FROM employees
GROUP BY JOB_ID
HAVING JOB_ID = "IT_PROG";

SELECT JOB_ID, SUM(SALARY) AS "total" FROM employees
WHERE JOB_ID = "IT_PROG";
-- Média salarial de todos os cargos, exceto das pessoas programadoras, em ordem decrescente
SELECT JOB_ID, AVG(SALARY) AS "Media_salarial" FROM employees
GROUP BY JOB_ID
HAVING JOB_ID <> "IT_PROG"
ORDER BY Media_salarial DESC;
-- Média salarial e o número de funcionários dos departamentos com mais de dez funcionários.
SELECT AVG(SALARY) AS "Media_salarial", COUNT(*) AS "Numero_funcionarios" FROM employees
GROUP BY DEPARTMENT_ID
HAVING Numero_funcionarios > 10;
-- Atualizar coluna PHONE_NUMBER, onde telefones iniciados por 515 devem iniciar com 777 .
SET SQL_SAFE_UPDATES = 0;
UPDATE employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, 515, 777)
WHERE PHONE_NUMBER LIKE "515%";
--  Informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT * FROM employees
WHERE CHAR_LENGTH(FIRST_NAME) >= 8;
-- Exibir de todos funcionários: id , primeiro nome e ano no qual foi contratado
SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) AS HIRE_YEAR FROM employees;
-- Exibir de todos funcionários: id , primeiro nome e dia no qual foi contratado
SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) AS HIRE_DAY FROM employees;
-- Exibir de todos funcionários: id , primeiro nome e mês no qual foi contratado
SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) AS HIRE_MONTH FROM employees;
-- Nomes dos funcionários em letra maiúscula
SELECT UCASE(CONCAT(FIRST_NAME, " ", LAST_NAME)) FROM employees;
-- Sobrenome e a data de contratação de todos os funcionários contratados em julho de 1987
SELECT LAST_NAME, HIRE_DATE FROM employees
WHERE LEFT(HIRE_DATE, 7) = '1987-07';
-- Exibir de todos os funcionários: nome , sobrenome , tempo que trabalha na empresa (em dias)
SELECT FIRST_NAME, LAST_NAME, DATEDIFF(CURRENT_DATE(), HIRE_DATE) AS Days_worked FROM employees;