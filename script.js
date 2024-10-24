// Função de Criptografia da Cifra de Vigenère em Javascript:

function encryption(message, key) {
  key = key.toLowerCase().trim();
  message = message.toLowerCase().trim();
  let encryption = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (i in message) {
    //validações
    for (let i = 0; key.length < message.length; i++) {
      key = key.concat(key[i]);
    }
    if (message[i] == " ") {
      encryption += " ";
    } else {
      nKey = alphabet.indexOf(key[i]);
      nMessage = alphabet.indexOf(message[i]);
      nencryption = nMessage + nKey;
      if (nencryption >= 26) nencryption -= 26;
      encryption += alphabet[nencryption];
    }
  }
  return encryption;
}

//Função de Envio da Mensagem Criptografada para a API:

async function decryptionAPI(message, key) {
  let options = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      encrypted_message: message,
      keyword: key,
    }),
  };

  const response = await fetch(
    "https://desafio9.onrender.com/decrypt_message",
    options
  )
    .then((res) => res.json())
    .catch((error) => console.error("Erro:", error));

  // const decryption = await response.json();

  return response.decrypted_message;
}

//Reatividade da página:

let decryptionButton = document.getElementById("decryption");
let encryptionButton = document.getElementById("encryption");

async function inputResultText(callback) {
  let messageText = document.getElementById("message").value;
  let keyText = document.getElementById("key").value;

  if (!messageText || !keyText) {
    alert("Mensagem e palavra-chave são obrigatórias!");
  } else {
    let resultText = document.getElementById("result");
    let result = await callback(messageText, keyText);
    resultText.value = result;
  }
}

decryptionButton.onclick = function () {
  inputResultText(decryptionAPI);
};

encryptionButton.onclick = function () {
  inputResultText(encryption);
};
