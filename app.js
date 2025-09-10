/*
let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector ('p');
paragrafo.innerHTML = 'Qual o número secreto entre 1 e 10 ?';
*/

// Inicio do código 

let listaDeNumerosSorteados = [];
let NumeroMinimo = 1;
let NumeroMaximo = 10;
let NumeroSecreto = gerarNumeroAleatorio ();
let Tentativas = 1;

console.log (`NumeroSecreto = ${NumeroSecreto}`);

function exibirTextonaTela(tag , texto) {
    let TituloeParagrafo = document.querySelector (tag);
    TituloeParagrafo.innerHTML = (texto);
}

function exibirMensagemInicial () {
exibirTextonaTela ('h1','Jogo do número secreto');
exibirTextonaTela ('p',`Qual o número secreto entre ${NumeroMinimo} e ${NumeroMaximo} ?`);
}

exibirMensagemInicial ();

function gerarNumeroAleatorio () {
    let numeroEscolhido = (parseInt((Math.random() * (NumeroMaximo))) + (NumeroMinimo));
    let quantidadeDeNumerosDaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeNumerosDaLista == NumeroMaximo) {
        listaDeNumerosSorteados = [];
    } 
    if (listaDeNumerosSorteados.includes (numeroEscolhido)) {
        return gerarNumeroAleatorio ();
    } else {
        console.log (`numeroEscolhido = ${numeroEscolhido}`);
        listaDeNumerosSorteados.push (numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
} 

function limparCampo () {
    chute = document.querySelector ('input');
    chute.value = '';        
}

document.getElementById ('acertou').removeAttribute ('disabled'); 

function verificarChute () {   
    let chute = document.querySelector ('input').value;
    if (chute == NumeroSecreto) {   
        exibirTextonaTela ('h1', 'ACERTOU !');
        let PalavraTentativas = Tentativas == 1 ? 'tentativa' : 'tentativas';
        let MensagemTentativas = (`Parabéns você acertou com ${Tentativas} ${PalavraTentativas} !`);
        exibirTextonaTela ('p' , MensagemTentativas);
        document.getElementById ('reiniciar').removeAttribute ('disabled');
        document.getElementById ('acertou').setAttribute ('disabled' , true);
    } else if (chute < NumeroMinimo) {
            exibirTextonaTela ('p' , `Informe um número corretamente válido entre ${NumeroMinimo} e ${NumeroMaximo}`);
        } 
    else {
        Tentativas++;
        if (chute > NumeroSecreto) {
            exibirTextonaTela ('p' , `O número secreto é menor que ${chute}`);
        } else {
            exibirTextonaTela ('p' , `O número secreto é maior que ${chute}`);
        }
        limparCampo ()
    }
}

function reiniciarJogo () {
    NumeroSecreto = gerarNumeroAleatorio ();
    limparCampo ();
    Tentativas = 1;
    exibirMensagemInicial ();
    document.getElementById ('reiniciar').setAttribute ('disabled' , true);
    document.getElementById ('acertou').removeAttribute ('disabled');
}

//Fim do código