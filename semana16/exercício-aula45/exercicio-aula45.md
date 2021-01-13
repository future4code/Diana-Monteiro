### Exercício 1
a) ALTER TABLE Actor DROP COLUMN salary; // Essa query altera a tabela Actor, excluindo a coluna salary.

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); // Essa query muda o nome da coluna gender para sex.

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255); // Essa query altera a quantidade máxima de caracteres 
utilizáveis na coluna gender.

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício 2
a) A query é: 
```
UPDATE Actor
SET name = "Sonia Braga" , birth_date = "1950-04-30"
WHERE id = "003";
```

b) As query são: 
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

c) A query é: 
```
UPDATE Actor
SET name = "Renato Aragão", salary = "90000", birth_date = "1953-03-27", gender = "male"
WHERE id = "005";
```

d) A query é: 
```
UPDATE Actor
SET estado_civil = "casada"
WHERE id = "003";
```
O  "Error Code: 1054. Unknown column 'estado_civil' in 'field list'" foi retornado, ele diz que a coluna "estado_civil" é desconhecida na lista de campos.

### Exercício 3

a)  A query é: 
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b) A query é: 
```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4

a)  A query é: 
```
SELECT MAX(salary) FROM Actor;
```

b)  A query é: 
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c)  A query é: 
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d)  A query é: 
```
SELECT SUM(salary) FROM Actor;
```
### Exercício 5

a)  A query em questão retorna a quantidade de atores e atrizes na tabela agrupados por gênero, em relação ao gênero.

b)  A query é: 
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c)  A query é: 
```
SELECT * FROM Actor
ORDER BY salary ASC;
```

d)  A query é: 
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e)  A query é: 
```
SELECT AVG(salary), gender 
AS 'média-salário' 
FROM Actor 
GROUP BY gender;
```

### Exercício 6

a)  A query é: 
```
ALTER TABLE Movie 
ADD playing_limit_date DATE;
```

b)  A query é: 
```
ALTER TABLE Movie
CHANGE rating rating FLOAT;
```

c)  A query é: 
```
UPDATE Movie
SET playing_limit_date = "2018-04-12"
WHERE id = "001"

UPDATE Movie
SET playing_limit_date = "2021-03-11"
WHERE id = "003"
```

d)  A query é: 
```
DELETE FROM Movie WHERE id = "002"

UPDATE Movie
SET synopsis = "Essa sinopse precisa melhores."
WHERE id = "002";
```
Nada acontece quando eu tento adicionar um novo valor à sinopse do filme de id 002, nem mesmo um erro é retornado.

### Exercício 7

a)  A query é: 
```
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```

b)  A query é: 
```
SELECT AVG(rating) FROM Movie;
```

c)  A query é: 
```
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```

d)  A query é: 
```
SELECT COUNT(*) FROM Movie WHERE release_Date > CURDATE();
```

e)  A query é: 
```
SELECT MAX(rating) FROM Movie;
```

f)  A query é: 
```
SELECT MIN(rating) FROM Movie;

```

### Exercício 8

a)  A query é: 
```
SELECT * FROM Movie
ORDER BY title ASC;
```

b)  A query é: 
```
SELECT * FROM Movie
ORDER BY title DESC
LIMIT 5;
```

c)  A query é: 
```
SELECT * FROM Movie
ORDER BY playing_limit_date DESC
LIMIT 3;
```

d)  A query é: 
```
SELECT * FROM Movie
ORDER BY rating DESC
LIMIT 3;
```
