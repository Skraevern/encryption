const clearBtn = document.getElementById("clear-btn");
const encryptionBtn = document.getElementById("encryption-btn");
const decryptionBtn = document.getElementById("decryption-btn");
let encryptionKey = document.getElementById("encryption-key");
let plainTextInput = document.getElementById("plaintext");
let decryptionKey = document.getElementById("decryption-key");
let encryptedTextInput = document.getElementById("encrypted-text");
let encryptedText = "";
let encryption = 0;
let addEncryption;

const clear = () => {
  encryptionKey.value = "";
  plainTextInput.value = "";
  encryptedTextInput.value = "";
  encryptionString = "";
  textString = "";
  clearMemory();
};
const clearMemory = () => {
  encryptedText = "";
  encryption = 0;
};

const encrypt = () => {
  if (addEncryption) {
    encryptionString = encryptionKey.value;
    textString = plainTextInput.value;
  } else if (!addEncryption) {
    encryptionString = decryptionKey.value;
    textString = encryptedTextInput.value;
  }
  for (let i = 0; i < textString.length; i++) {
    encryption = textString[i].charCodeAt(0);
    for (let index = 0; index < encryptionString.length; index++) {
      if (addEncryption) {
        encryption += Number(encryptionString[index]);
        if (encryption > 126) {
          for (let i = 0; encryption > 126; i++) {
            encryption -= 95;
          }
        }
      } else if (!addEncryption) {
        encryption -= Number(encryptionString[index]);
        if (encryption < 32) {
          for (let i = 0; encryption < 32; i++) {
            encryption += 95;
          }
        }
      }
    }
    encryptedText += String.fromCharCode(encryption);
  }
  if (addEncryption) {
    encryptedTextInput.value = encryptedText;
  } else if (!addEncryption) {
    plainTextInput.value = encryptedText;
  }
  clearMemory();
};

clearBtn.onclick = () => clear();
encryptionBtn.onclick = () => {
  addEncryption = true;
  encrypt();
};
decryptionBtn.onclick = () => {
  addEncryption = false;
  encrypt();
};
