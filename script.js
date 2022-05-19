const encrypt = {
  clearBtn: document.getElementById("clear-btn"),
  encryptionBtn: document.getElementById("encryption-btn"),
  decryptionBtn: document.getElementById("decryption-btn"),
  encryptionKey: document.getElementById("encryption-key"),
  plainTextInput: document.getElementById("plaintext"),
  decryptionKey: document.getElementById("decryption-key"),
  encryptedTextInput: document.getElementById("encrypted-text"),
  encryptedText: "",
  encryption: 0,
  addEncryption: true,

  clear() {
    this.encryptionKey.value = "";
    this.plainTextInput.value = "";
    this.encryptedTextInput.value = "";
    this.encryptionString = "";
    this.textString = "";
    this.clearMemory();
  },
  clearMemory() {
    this.encryptedText = "";
    this.encryption = 0;
  },

  encryptFunction() {
    if (this.addEncryption) {
      this.encryptionString = this.encryptionKey.value;
      this.textString = this.plainTextInput.value;
    } else if (!this.addEncryption) {
      this.encryptionString = this.decryptionKey.value;
      this.textString = this.encryptedTextInput.value;
    }
    for (let i = 0; i < this.textString.length; i++) {
      this.encryption = this.textString[i].charCodeAt(0);
      for (let index = 0; index < this.encryptionString.length; index++) {
        if (this.addEncryption) {
          this.encryption += Number(this.encryptionString[index]);
          if (this.encryption > 126) {
            for (let i = 0; this.encryption > 126; i++) {
              this.encryption -= 95;
            }
          }
        } else if (!this.addEncryption) {
          this.encryption -= Number(this.encryptionString[index]);
          if (this.encryption < 32) {
            for (let i = 0; this.encryption < 32; i++) {
              this.encryption += 95;
            }
          }
        }
      }
      this.encryptedText += String.fromCharCode(this.encryption);
    }
    if (this.addEncryption) {
      this.encryptedTextInput.value = this.encryptedText;
    } else if (!this.addEncryption) {
      this.plainTextInput.value = this.encryptedText;
    }
    this.clearMemory();
  },
  activateBtns() {
    this.clearBtn.onclick = () => encrypt.clear();
    this.encryptionBtn.onclick = () => {
      this.addEncryption = true;
      this.encryptFunction();
    };
    this.decryptionBtn.onclick = () => {
      this.addEncryption = false;
      this.encryptFunction();
    };
  },
};
window.onload = () => encrypt.activateBtns();
