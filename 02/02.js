let stringCorrompida = "*Canis %lupus )familiaris";


let retirar_char = "!@#$%&*().";
//let nova_string = "";
for (let i = 0; i < stringCorrompida; i++) {
    for (let j = 0; j < retirar_char; j++) {
        if (stringCorrompida[i] === retirar_char[j]) {
            stringCorrompida.shift();
        }
        }
}
console.log(stringCorrompida);