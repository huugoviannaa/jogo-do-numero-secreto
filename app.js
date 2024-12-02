let listaDeNumeroSorteado = [];
let numeroLimite = 4;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativa = 1;
let chute;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})

}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p','Escolha um Número entre 1 e 10');
}
mensagemInicial();

function verificarChute() { 
        
            chute = document.querySelector('input').value;
            //console.log(chute == numeroAleatorio);

            if( chute == numeroAleatorio){
                exibirTextoNaTela('h1', 'Acertou !');
                let palavraTentativa = tentativa > 1 ? 'tentativas':'tentativa';
                let mensagemTentativa = `Você acertou o número secreto com ${tentativa} ${palavraTentativa} !` 
                exibirTextoNaTela('p',mensagemTentativa);
                document.getElementById('reiniciar').removeAttribute('disabled');
            
            }else{
                if(chute > numeroAleatorio){
                    exibirTextoNaTela('p','O número é menor');
                }else{
                    exibirTextoNaTela('p', 'O número é maior');
                }
                tentativa++
                limparCampo();                
            }
            
        }

function gerarNumeroAleatorio(){
    let numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosSorteados = listaDeNumeroSorteado.length;

    if(quantidadeDeNumerosSorteados == numeroLimite){
        listaDeNumeroSorteado = [];
    }

    if(listaDeNumeroSorteado.includes(numeroSorteado)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeroSorteado.push(numeroSorteado);
        console.log(listaDeNumeroSorteado);
        return numeroSorteado;

    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    tentativa = 1;
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}