jogadas = ["x", "x","0" ,"x" ,"x" ,"x" ,"x" ,"0" ,"0"];
jogadas_x = jogadas.map((i,id) => i === "x" ? id : null);
jogadas_o = jogadas.map((i,id) => i === "0" ? id : null);
combinacoes_vencedoras = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2] ];

acertos_de_x = combinacoes_vencedoras.map(combinacao =>{

    console.log(`\n\n%cVou verificar se a combinação ${ combinacao } está entre as jogadas efetuadas`, `color: #0072a4`);
    return combinacao.filter(item_da_combinacao => {
        console.log(`\t\tAqui, vamos ver se o time ${ item_da_combinacao }da combinação está entre as jogadas efetuadas`);
        let esta_incluso = jogadas_x.includes(item_da_combinacao);
        console.log(`\t\t\t%cEstá %s`, esta_incluso ? `color: #1fa855` : `color: #ff0000`, esta_incluso ? "SM" : "NÃo");

        return esta_incluso;
    })
})

acertos_de_o = combinacoes_vencedoras.map(combinacao =>{

    console.log(`\n\n%cVou verificar se a combinação ${ combinacao } está entre as jogadas efetuadas`, `color: #0072a4`);
    return combinacao.filter(item_da_combinacao => {
        console.log(`\t\tAqui, vamos ver se o time ${ item_da_combinacao }da combinação está entre as jogadas efetuadas`);
        let esta_incluso = jogadas_o.includes(item_da_combinacao);
        console.log(`\t\t\t%cEstá %s`, esta_incluso ? `color: #1fa855` : `color: #ff0000`, esta_incluso ? "SM" : "NÃo");

        return esta_incluso;
    })
})