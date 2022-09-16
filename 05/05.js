
function solucao(precos) {
    // seu codigo aqui
      let primeiroPreco = 0;
      let segundoPreco = 0;
      
      let compararPreco = [];
      
      for (let i = 0; i < precos.length; i++) {
          primeiroPreco = precos[i];
          for (let j = i+1; j < precos.length; j++) {
              segundoPreco = precos[j];
              compararPreco.push(primeiroPreco-segundoPreco);
          }
      }
      
      //console.log(compararPreco);
      
      let menorValor = 0;
      
      for (let c =0; c < compararPreco.length; c++) {
          if (menorValor <= 0) {
              menorValor = compararPreco[c];
          } else if (compararPreco[c] > 0 && compararPreco[c] < menorValor) {
              menorValor = compararPreco[c];
      }
      }
      console.log(menorValor);
  
  }