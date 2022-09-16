
function solucao(notas) {
	//seu codigo aqui
    
    let maiorNota = notas[0];
    let menorNota = notas[0];
    let somaTudoNotas = 0;
    
    
    for (let i = 0; i < notas.length; i++){
        if (maiorNota < notas[i]) {
            maiorNota = notas[i];
        }
        if (menorNota > notas[i]) {
            menorNota = notas[i];
        }
        somaTudoNotas += notas[i];
    }
    
    let resultado = (somaTudoNotas - maiorNota - menorNota) / (notas.length -2);
    
    
    
    console.log(resultado); 
    
}