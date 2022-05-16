const clearBtn = document.getElementById("clear-btn");
const encryptionBtn = document.getElementById("encryption-btn");
let encryption1Input = document.getElementById("encryption-1");
let encryption2Input = document.getElementById("encryption-2");
let encryption3Input = document.getElementById("encryption-3");
let encryption4Input = document.getElementById("encryption-4");
let plainTextInput = document.getElementById("plaintext");
let encryption1;
let encryption2;
let encryption3;
let encryption4;
let decryption1 = document.getElementById("decryption-1");
let decryption2 = document.getElementById("decryption-2");
let decryption3 = document.getElementById("decryption-3");
let decryption4 = document.getElementById("decryption-4");
let encryptedTextInput = document.getElementById("encrypted-text");

const clear = () => {
  encryption1Input.value = "";
  encryption2Input.value = "";
  encryption3Input.value = "";
  encryption4Input.value = "";
  plainTextInput.value = "";
  decryption1.value = "";
  decryption2.value = "";
  decryption3.value = "";
  decryption4.value = "";
  encryptedTextInput.value = "";
};

const encypt = () => {
  encryption1 = encryption1Input.value;
  encryption2 = encryption2Input.value;
  encryption3 = encryption3Input.value;
  encryption4 = encryption4Input.value;
  text = plainTextInput.value;
  decryption1.value = encryption1;
  decryption2.value = encryption2;
  decryption3.value = encryption3;
  decryption4.value = encryption4;

  console.log(encryption1, text);
};

clearBtn.onclick = () => clear();
encryptionBtn.onclick = () => encypt();
