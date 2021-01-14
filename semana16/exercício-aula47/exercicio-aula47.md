### Exercício 1
a) Foreign key é o campo que estabelece o relacionamento entre duas tabelas. Assim, uma coluna corresponde à mesma coluna que é a chave primária de outra tabela. Dessa forma, deve-se especificar na tabela que contém a chave estrangeira quais são essas colunas e à qual tabela está relacionada. 

b) A query é:
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id INT,
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
),

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("002","Péssima atuação dos protagonistas!", 4, "005");
```
c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-diana-monteiro`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)).

 Não é possível pois a chave não existe, dessa forma é retornado um erro que diz que há uma restrição sob a foreign key. 

d) 
```
ALTER TABLE Movie DROP COLUMN rating;
```

e)
```
DELETE FROM Movie WHERE rating = 9;
```
Error Code: 1054. Unknown column 'rating' in 'where clause'

Não é possível apagar pois a coluna rating não existe mais na tabela Movie, o erro diz que a coluna é desconhecida.

### Exercício 2
a) A tabela MovieCast criar duas colunas com campos de id e relaciona essas colunas com outras duas tabelas através do id dessas tabelas.

b) 
```
INSERT INTO MovieCast(movie_id, actor_id) VALUES( "001", "003");
INSERT INTO MovieCast(movie_id, actor_id) VALUES( "003", "001");
INSERT INTO MovieCast(movie_id, actor_id) VALUES( "004", "002");
INSERT INTO MovieCast(movie_id, actor_id) VALUES( "005", "004");
INSERT INTO MovieCast(movie_id, actor_id) VALUES( "006", "005");
INSERT INTO MovieCast(movie_id, actor_id) VALUES( "007", "006");
```

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-diana-monteiro`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não é possível pois a chave não existe, dessa forma é retornado um erro que diz que há uma restrição sob a foreign key.

d) 
```
DELETE FROM Movie WHERE rating = 9;
```
Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.

Não é possível apagar a linha pois ela está relacionada com uma foreign key.

### Exercício 3

a) A query faz relação entre as tabelas Movie e Rating e retonra o colunas que tem correspondências entre ambas as tabelas. O operador ON organiza a tabela para que os dados não venham repetidos, sem ele a tabela retorna repetida e desorganizada.

b) 
```
SELECT Movie.id, title, rate  FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

### Exercício 4

a) 
```
SELECT Movie.id, title, rate, comment  FROM Movie 
LEFT JOIN Rating ON Movie.id = Rating.movie_id;
```

b)
```
SELECT Movie.id, title, MovieCast.actor_id  FROM Movie 
RIGHT JOIN MovieCast ON Movie.id = MovieCast.movie_id;
```

c)
```
SELECT AVG(rate) AS "average ratings", Movie.title FROM Movie 
LEFT JOIN Rating ON Movie.id = Rating.movie_id GROUP BY Movie.id;
```

### Exercício 5

a) A query cria uma tabela temporária com a união dos dados das tabela Movie, Actor e MovieCast. Ela primeiro faz a relação da tabela MovieCast com a Movie, retornando todos os dados de Movie até mesmo aqueles que não se relacionam com a tabela MovieCats, em seguida ela relaciona a tabela Actor com a tabela MovieCast, retornando apenas os que ambas tem em comum, assim unindo as três tabelas. Há necessidade de dois Joins porque são 3 tabelas.


b)
```
SELECT Movie.id AS movie_id, Movie.title, Actor.id AS actor_id, Actor.name FROM Movie
LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```

c) A Query não roda pois tem um erro de sintaxe, no lugar de m.title está m,title. Assim, um erro é retornado dizendo que a coluna "m" não existe. Para corrigir bastar trocar a vírugla por um ponto e então, a query roda perfeitamente.
```
SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

d)
```
SELECT Movie.title, Actor.name, rate, comment FROM Movie
LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id
LEFT JOIN Rating ON Rating.id = Movie.id;
```

### Exercício 6

a) A relação é do tipo 1:M


b)
```
CREATE TABLE OscarMovies(
 id INT PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 award_date DATE NOT NULL,
 movie_id INT,
 FOREIGN KEY (oscar_id) REFERENCES Movie(id)
);
```

c)
```
INSERT INTO OscarMovies (id, name, award_date, oscar_id) 
VALUES ("001", "Óscar de melhor filme", "2021-02-10", "004");

INSERT INTO OscarMovies (id, name, award_date, oscar_id) 
VALUES ("002", "Óscar de melhor diretor", "1996-08-14", "007");

INSERT INTO OscarMovies (id, name, award_date, oscar_id) 
VALUES ("003", "Óscar de melhor figurino", "2017-05-02", "003");
```

d)
```
SELECT Movie.id AS "movie_id", Movie.title, OscarMovies.name  FROM Movie 
LEFT JOIN OscarMovies ON Movie.id = OscarMovies.movie_id;
```
