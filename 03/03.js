function solucao(precos) {
    //seu codigo aqui
    let menor = precos[0];
    let pagar = 0;
 
    if (precos.length < 5) {
        for (let preco of precos){
            pagar = pagar + preco;
        }
    console.log(pagar);
    } else {
        for (let preco of precos) {
            pagar += preco;
            if (menor > preco) {
                menor = preco;
            }
        }
        console.log(pagar - menor)
    }
}