-- EXERCÍCIOS UTILIZANDO O BANCO DE DADOS PIXAR.
-- 1) Vendas nacionais e internacionais de cada filme.
SELECT M.title, B.domestic_sales, B.international_sales
FROM Movies AS M
INNER JOIN BoxOffice AS B
ON M.id = B.movie_id;

-- 2) retorne o número de vendas para cada filme que possui um número maior de vendas internacionais do que vendas nacionais.
SELECT M.title, B.domestic_sales + B.international_sales AS Sales
FROM Movies AS M
INNER JOIN BoxOffice AS B
ON B.movie_id = M.id
WHERE B.international_sales > B.domestic_sales;

-- 3) Retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT M.title, B.rating
FROM Movies AS M
INNER JOIN BoxOffice AS B
ON B.movie_id = M.id
ORDER BY rating DESC;

-- 4) Utilizando o LEFT JOIN, retorne os dados dos cinemas em ordem alfabética, e os dados dos filmes que estão em cartaz nestes cinemas.
SELECT T.name,
		T.location,
        M.title,
        M.director,
        M.year,
        M.length_minutes
FROM Theater AS T
LEFT JOIN Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;

-- 5) Utilizando o RIGHT JOIN, retorne os dados dos cinemas em ordem alfabética, e os dados dos filmes que estão em cartaz nestes cinemas.
SELECT
	T.name,
	T.location,
	M.title,
	M.director,
	M.year,
	M.length_minutes
FROM Theater AS T
RIGHT JOIN Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;