
### Exercicio 1
a) CREATE TABLE Actor 
    id VARCHAR(255) PRIMARY KEY, -- campo identifica item com um número único 
    nome VARCHAR (255) NOT NULL, -- campo onde o nome do item 
    salary FLOAT NOT NULL, -- campo especifica o valor do salário 
    birth_date DATE NOT NULL, -- especifica a data 
    gender VARCHAR(6) NOT NULL

b) show databases -- exibe informações do schema 

c) show tables -- exibe a tabela existentes no banco de dados 

d) describe Actor; -- exibe os valores atribuidos a tabela Actor

### Exercicio2 

INSERT INTO Actor(id, nome, salary, birth_date, gender)
VALUES(002, "Glória Pires", 1.200,000, 1963-08-23, "FEMALE");

select * from Actor
