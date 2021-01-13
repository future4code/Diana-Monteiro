### Exercício 1
a) Create Table cria uma nova tabela;
   Varchar é a forma de representar strings, colocando entre parênteses o número máximo de caracteres possíveis;
   Primary Key determina que aquele tipo é a chave primária, o identificador primário daquele campo na tabela;
   Date é a forma de representar datas.
   Not null determina que aquele item deve ser preenchido, ou seja determina a obrigatoriedade do preenchimento do valor de um coluna.

b) O comando SHOW DATABASES retorna todos os bancos de dados criados no MySQL, e o comando SHOW TABLES retorna todas as tabelas criadas em um banco de dados específico.

c) O comando DESCRIBE Actor retorna a tabela pronta e demostra em todos os campos os valores determinados para cada, se seu requisito é obrigatório ou não e qual campo foi definido como primary key, ou seja, ele descreve em detalhes a tabela especificada.

### Exercício 2
a)  ```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "002", 
    "Glória Pires",
    1200000,
    "1963-08-23", 
    "female"
    );
    ```

b)  Error Code: 1062. Duplicate entry "002" for key 'PRIMARY'. 
    Código de erro: 1062. Entrada duplicada "002" para a chave 'PRIMÁRIA'

    O erro acima aponta que estamos tentando adicionar um item a tabela com uma primary key já criada. A primary key é um valor único para cada item, dessa forma não é póssivel adicionar dois itens com a mesma PK.

c)  Error Code: 1136. Column count doesn't match value count at row 1 
    Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1

    O erro acima diz que o número de colunas não corresponde aos valores apresentados, ou seja, falta apontar as colunas que faltam. Dessa forma o código fica assim:
    ```
    INSERT INTO Actor (id, name, salary,  birth_date, gender)
    VALUES(
    "003", 
    "Fernanda Montenegro",
    300000,
    "1929-10-19", 
    "female"
    );
    ```

d)  Error Code: 1364. Field 'name' doesn't have a default value
    Código de erro: 1364. O campo 'nome' não tem um valor padrão

    O erro acima diz que está faltando preencher o campo nome, esse campo foi criado como sendo NOT NULL, dessa forma seu preenchimento é obrigatório e enquanto nõa for preenchido esse erro continuará. O código correto ficará assim:
    ```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "004",
    "Caio Castro",
    400000,
    "1949-04-18", 
    "male"
    );
    ```

e)  Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
    Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1

    O erro acima está apontando um erro na sintaxe do código ao escrever o valor da data, ficarma faltando as aspas. O código corretor ficará assim: 
    ```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "005", 
    "Juliana Paes",
    719333.33,
    "1979-03-26", 
    "female"
    );
    ```

f)   ```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "006", 
    "Rodrigo Santoro",
    1500000,
    "1975-08-22", 
    "male"
    );

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "007", 
    "Alice Braga",
    1600000,
    "1983-04-15", 
    "female"
    );    
     ```

### Exercício 3

a)  SELECT * from Actor WHERE gender = "female";

b)  SELECT salary from Actor  WHERE name = "Tony Ramos";

c)  SELECT * from Actor WHERE gender = "invalid";
    Ele não retorna nada, pois não existe nenhum item que tenha o gender com esse valor.

d)  SELECT id, name, salary from Actor WHERE salary <= 500000;

e)  Error Code: 1054. Unknown column 'nome' in 'field list'
    Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'

    O erro acima diz que não existe coluna denominada nome na tabela, o certo seria name:
    ```
    SELECT id, name from Actor WHERE id = "002";
    ```

### Exercício 4

a) A query seleciona os atores que tenha o nome iniciando com as letras A ou J e o salário maior que R$300.00,00.

b) SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

c) SELECT * FROM Actor WHERE (name LIKE "G%" OR name LIKE "%g%");

d) SELECT * FROM Actor WHERE (name LIKE "G%" OR name LIKE "A%" OR name LIKE "%g%" OR name LIKE "%a%") AND (salary > 350000) AND (salary < 900000);

### Exercício 5

a)  A query abaixo cria a tabela de nome Filmes com asseguinte colunas: id, título, sinopse, lançamento e avaliação.
    ```
    CREATE TABLE Filmes(
    id INT PRIMARY KEY,
    Título VARCHAR(255) NOT NULL,
    Sinopse TEXT NOT NULL,
    Lançamento DATE NOT NULL,
    Avaliação INT NOT NULL
    );
    ```

b)   ```
    INSERT INTO Filmes ( id, Título, Sinopse, Lançamento, Avaliação)
    VALUES ( 001, 
    "Se Eu Fosse Você", 
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", 
    "2006-01-06", 
    7);
    ```

c)  ```
    INSERT INTO Filmes ( id, Título, Sinopse, Lançamento, Avaliação)
    VALUES ( 002, 
	"Doce de mãe", 
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", 
    "2012-12-27", 
	10);
    ```
    
d)  ```
    INSERT INTO Filmes ( id, Título, Sinopse, Lançamento, Avaliação)
    VALUES ( 003, 
	"Dona Flor e seus dois Maridos", 
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", 
    "2017-11-02", 
	8);
    ```

e)   ```
    INSERT INTO Filmes ( id, Título, Sinopse, Lançamento, Avaliação)
    VALUES ( 004, 
	"Bacurau", 
    "Pouco após a morte de dona Carmelita, aos 94 anos, os moradores de um pequeno povoado localizado no sertão brasileiro, chamado Bacurau, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade pela primeira vez. Quando carros se tornam vítimas de tiros e cadáveres começam a aparecer, Teresa (Bárbara Colen), Domingas (Sônia Braga), Acácio (Thomas Aquino), Plínio (Wilson Rabelo), Lunga (Silvero Pereira) e outros habitantes chegam à conclusão de que estão sendo atacados. Falta identificar o inimigo e criar coletivamente um meio de defesa.", 
    "2019-08-29", 
	9);
    ```

### Exercício 6

a)  ```
    SELECT id, Título, Avaliação from Filmes WHERE id = "002";
    ```

b)  ```
    Retornei um filme a partir de um Título espécífico pois o campo nome foi substituido por Título.
    SELECT * from Filmes WHERE Título = "Bacurau";
    ```

c)  ```
    SELECT id, Título, Sinopse FROM Filmes WHERE Avaliação >= 7;
    ```

### Exercício 7

a)  ```
    SELECT * FROM Filmes WHERE Título LIKE "%vida%";
    ```

b)  ```
    SELECT * FROM Filmes WHERE Título LIKE "%v%" OR Sinopse LIKE "%brasil%";
    ```

c)  ```
    SELECT * FROM Filmes WHERE Lançamento < "2021-01-11";
    ```

d)  ```
    SELECT * FROM Filmes WHERE Lançamento < "2021-01-11" AND (Título LIKE "%v%" OR Sinopse LIKE "%brasil%") AND Avaliação > 7;
    ```
