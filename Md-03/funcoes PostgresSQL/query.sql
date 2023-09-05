--select count(nome) from usuarios where idade >= 18;

--select count(*) as "uantidadeUsuarios" from usuarios where idade >= 18;

--select nome || ' - ' || email as nomeEmail from usuarios;
--select concat(nome,' -- ', email, idade) as nome_email_idade from usuarios;

--select avg(idade) from usuarios;
--select round(avg(idade)) from usuarios 

--select min(cadastro) from usuarios;
--select max(idade) from usuarios;

--select sum(idade) from usuarios;

--select idade::text from usuarios;
--select '123'::integer;
--select cast(idade as text) from usuarios;

--select * from agendamentos where cast(agendamento as date) > now();
--select * from agendamentos where cast(agendamento as timestamp) > now();

--select cast(agendamento as date) from agendamentos;
--select cast(agendamento as time) from agendamentos;
--select cast(agendamento as timestamp) from agendamentos;

--select age('2022-03-16 12:00:00', '2022-02-15 11:00:00');
--select age('2022-03-16 12:00:00'::timestamp);
--select age('2022-03-16 12:00:00'::date);
--select *, age(agendamento::timestamp) from agendamentos where cast(agendamento as timestamp) > now();

--select coalesce(NULL, NULL, 'cenoura');
--select concat(nome, ' - ', coalesce(telefone, 'Não possui telefone')) from usuarios;
--select concat(nome, ' - ', coalesce(telefone, email, 'Não possui')) from usuarios;

--select idade, count(id), sum(idade) from usuarios group by idade;


