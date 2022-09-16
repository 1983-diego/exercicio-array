function solucao(palpite, palavra) {
	// seu codigo aqui
    
    let contador = 0;
    
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === palpite) {
            contador++;
        }
    }
    
    console.log(contador);
    
}