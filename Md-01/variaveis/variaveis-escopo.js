{
    //variável dentro do escopo
    const idade = 30;
    {
        console.log(idade);
    }
}

//console.log(idade)
//se usar o console fora com uma variável criada dentro do escopo não vai funcionar, porque ela não existe fora do escopo.