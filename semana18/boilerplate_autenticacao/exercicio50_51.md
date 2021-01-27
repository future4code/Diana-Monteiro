### Exercício Aula 50

### Exercício 1

a) Sim, pois usando os strings não ficamos limitados apenas há números, aumentando proporcionalmente a quantidade de Ids diferentes que podem ser criadas.

### Exercício 2

a) O código cria uma conexão com o banco de dados através da função connection e através da função createUser cria os usuários que serão inseridos nessa tabela que está sendo chamada através da variável userTableName. 

b)
```
CREATE TABLE User_aula50 (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```
### Exercício 7
a) Ela indica que aquele valor que irá chegar alí pode ser de qualquer tipo, evitando possíveis erros. 

### Exercício Aula 51

### Exercício 1

a) São componentes que compõe um hash, o salt é a string que é fundida a senha real e o round é o custo-numérico de caracteres, relacionado à segurança da senha.

### Exercício 2

b) O cadastro pois é nessa hora que o id do usuário é gerado e aos dados fornecidos pelo usuário são salvos no DB.
