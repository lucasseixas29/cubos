--CREATE

--INSERT INTO produtos (nome, preco, categoria) values('Caderno', '2000', 'Material Escolar');

--insert into produtos(nome, descricao, preco, categoria) values
--('Calça Jeans', NULL, 12900, 'Roupas'),
--('Bermuda', 'Bermuda longa preta', 12900, 'Roupas');

--READ

select * from produtos;

--UPDATE

--update produtos set nome = 'Caderno de 10 materias' where id = 2;
--update produtos set categoria = 'Calças',preco = 12950where descricao is NULL;
--update produtos set nome = 'Caderno'; (NUNCA FAÇA ISSO) UPDATE SEM WHERE

--DELETE

--delete from produtos where id = 4;
--delete from produtos where descricao is null;
delete from produtos; -- NUNCA FAÇA ISSO 2 (DELETE SEM WHERE)

