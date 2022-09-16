function solucao(stringCorrompida) {
    
    let dadoPuro = "";
    for (let char of stringCorrompida) {
        if (char === "!" || char === "@" || char === "#" || char === "$" || char === "%" || char === "&" || char === "*" || char === "(" || char === ")" || char === "."){
            
        } else {
            dadoPuro = dadoPuro + char;
        }
    }
    console.log(dadoPuro);
    
    
}

// function solucao(stringCorrompida) {
// 	// seu codigo aqui
//     let retirar_char = "!@#$%&*().";
//     let nova_string = [];
//     for (let i = 0; i < stringCorrompida.length; i++) {
//         for (let j = 0; j < retirar_char; j++) {
//             if (stringCorrompida[i] === retirar_char[j]) {
//             stringCorrompida.shift();
//         }
//         }
//         console.log(stringCorrompida);
//     }    
// }

// solucao("*Canis %lupus )familiaris");