const inputText = document.querySelector('.text-area');
const outputMessage = document.querySelector('.mensagem');
const encryptBtn = document.querySelector('.btn-encriptar');
const decryptBtn = document.querySelector('.btn-descriptografar');
const copyBtn = document.querySelector('.btn-copiar');

function encrypt(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

encryptBtn.addEventListener('click', () => {
    const encryptedText = encrypt(inputText.value);
    outputMessage.value = encryptedText;
});

decryptBtn.addEventListener('click', () => {
    const decryptedText = decrypt(inputText.value);
    outputMessage.value = decryptedText;
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(outputMessage.value).then(() => {
        alert('Texto copiado para a área de transferência');
    });
});
