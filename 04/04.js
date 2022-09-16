function solucao(sequencia) {
	//seu codigo aqui
     
    let contador = 0
    for (let i = 0;  i <sequencia.length; i++) {
        if (sequencia[i] === ">" && contador < 6) {
            contador++;
        } else if (sequencia[i] === ">" && contador === 6) {
            contador = 0;
        } else if (sequencia[i] === "<" && contador > 0) {
            contador--;
        }else if (sequencia[i] === "<" && contador === 0) {
            contador = 6;
        }
    }
    console.log(contador);
}