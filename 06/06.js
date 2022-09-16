function solucao(primeiraLetra, segundaLetra, palavras) {
	//seu codigo aqui

    let primeiraPalavra = "";
    let segundaPalavra = "";
    let lista =[];
    
    for (let palavra of palavras) {
        if (primeiraLetra === palavra[0] && segundaLetra === palavra[1]){
            lista.push(palavra);
        }
    }
    
    if (lista.length > 0) {
        for (let l of lista) {
            console.log(l);
        } 
    } else {
            console.log("NENHUMA");
    }  
    
}