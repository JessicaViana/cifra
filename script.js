//todo  1. função de criptografia da Cifra de Vigenère em Javascript

// let name = prompt("Please enter your name:");
// console.log("Hello, " + name + "!");
// var msg = prompt("mensagem:");
let msg = "homem morcego        ";
let key = "      jasontodd";

function cripto(msg, key) {
  key = key.toLowerCase().trim();
  msg = msg.toLowerCase().trim();
  let cripto = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (i in msg) {
    //validações
    for (let i = 0; key.length < msg.length; i++) {
      key = key.concat(key[i]);
    }
    if (msg[i] == " ") {
      cripto += " ";
    } else {
      nKey = alphabet.indexOf(key[i]);
      nMsg = alphabet.indexOf(msg[i]);
      nCripto = nMsg + nKey;
      if (nCripto >= 26) nCripto -= 26;
      cripto += alphabet[nCripto];
    }

    // console.log("CHAVE = " + key);
    // console.log("i = " + i);
    // console.log(`nKey =  ${key[i]} --> ${nKey}`);
    // console.log(`nMsg =  ${msg[i]} -->  ${nMsg}`);
    // console.log("nCripto = " + nCripto);
    // console.log("CRIPTO =  " + cripto.toUpperCase());
    // console.log("-------------");
  }
  return cripto;
}
