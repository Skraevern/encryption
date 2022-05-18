const clearBtn = document.getElementById("clear-btn");
const encryptionBtn = document.getElementById("encryption-btn");
let encryptionKey = document.getElementById("encryption-key");
let plainTextInput = document.getElementById("plaintext");
let decryptionKey = document.getElementById("decryption-key");
let encryptedTextInput = document.getElementById("encrypted-text");
let encryptedText = "";
let encryption;

const clear = () => {
  encryptionKey.value = "";
  plainTextInput.value = "";
  encryptedTextInput.value = "";
  encryptionString = "";
  textString = "";
  encryption = 0;
  encryptedText = "";
};

const encrypt = () => {
  encryptionString = encryptionKey.value;
  textString = plainTextInput.value;

  for (let i = 0; i < textString.length; i++) {
    encryption = textString[i].charCodeAt(0) + Number(encryptionString);
    if (encryption > 126) {
      for (let i = 0; encryption > 126; i++) {
        encryption -= 95;
      }
    }
    encryptedText += String.fromCharCode(encryption);
  }
  encryptedTextInput.value = encryptedText;
};

clearBtn.onclick = () => clear();
encryptionBtn.onclick = () => encrypt();
