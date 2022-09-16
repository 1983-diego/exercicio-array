

function solucao(disparos) {
	//seu codigo aqui
    let contador = 0;
    let i = 0;
    
    while (i < disparos.length) {
        if (disparos[i] > 70) {
            contador++;
        }
        i++
    }
    
    if (contador < 3) {
        console.log("ELIMINADO");
    } else {
        console.log(contador);
    }
  
}