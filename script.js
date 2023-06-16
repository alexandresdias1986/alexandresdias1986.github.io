// Cria um objeto com as letras que serão substituídas e suas respectivas substituições
const codificacao = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

// Captura elementos do HTML pelo ID

const textarea = document.querySelector('.textarea');
const mensagem = document.querySelector('.mensagem');
const mensagemsaida = document.querySelector('.mensagemsaida');
const criptografar = document.getElementById('criptografar');
const descriptografar = document.getElementById('descriptografar');
const btncrip = document.getElementById("criptografar")
const textosaida = document.getElementById('textosaida');


// Função que codifica o texto digitado e exibe o resultado na tela







function btnencriptar() {

    const textoencriptado = encriptar(textarea.value);

    if (textarea.value == '') {
        mensagem.style.display = "block"
        mensagemsaida.style.display = "none"
    }

    else {
        mensagem.style.display = "none"
        mensagemsaida.style.display = "flex"
        textosaida.innerHTML = textoencriptado
    }
    mensagem.value = textoencriptado;
    textarea.value = "";

}
function encriptar(stringencriptada) {
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringencriptada = stringencriptada.toLowerCase();

    for (let i = 0; i < matrizcodigo.length; i++) {
        if (stringencriptada.includes(matrizcodigo[i][0])) {
            stringencriptada = stringencriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);
        }
    }
    return stringencriptada;
}

function btndesencriptar() {
    const textoDesencriptado = desencriptar(textarea.value);

    if (textarea.value == '') {
        mensagem.style.display = "block"
        mensagemsaida.style.display = "none"
    }

    else {
        mensagem.style.display = "none"
        mensagemsaida.style.display = "flex"
        textosaida.innerHTML = textoDesencriptado
    }
    mensagem.value = textoencriptado;
    textarea.value = "";
    mensagem.value = textoDesencriptado;
    textarea.value = "";
    //alert(textoDesencriptado)
}
function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

// Função que copia o texto exibido na tela para a área de transferência
function copia(){
    let textoCopiado = textosaida.innerHTML
    navigator.clipboard.writeText(textoCopiado);
  
    alert(`O texto '${textoCopiado}' foi copiado para a sua Área de Transferência!`);
  }


//botao encriptar
btncrip.onclick = btnencriptar;

//botaodescriptografar
descriptografar.onclick = btndesencriptar;

//botaocopiar
copiar.onclick = copia;





