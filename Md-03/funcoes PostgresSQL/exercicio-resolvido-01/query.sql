select categoria, count(id) as "Quantidade Produtos", sum(estoque) as "Soma Total Estoque" from farmacia group by categoria;