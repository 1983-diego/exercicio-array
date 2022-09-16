function solucao(letra, palavras) {
	//seu codigo aqui
    let contador = 0;
    for (let i = 0; i < palavras.length; i++) {
        if (letra !== palavras[i][0]) {
            contador+=1;
        }
    }
    console.log(contador);
}