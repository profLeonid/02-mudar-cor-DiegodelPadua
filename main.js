'use strict'


const botaoTrocarCor = document.getElementById('trocar-cor')
function mudarFundo(corEmPortugues) {

        // Dicionário de cores em português
        const cores = {
            vermelho: "#ff0000",
            azul: "#0000ff",
            verde: "#00ff00",
            amarelo: "#ffff00",
            preto: "#000000",
            branco: "#ffffff"
        };

        // Verifica se a cor existe
        if (cores[corEmPortugues]) {
            document.body.style.backgroundColor = cores[corEmPortugues];
        } else {
            alert("Cor não encontrada!");
        }
    }
function trocarCor(){
    const cor = document.getElementById('cor').value
   
    const cores = {
        vermelho: "#ff0000",
        azul: "#0000ff",
        verde: "#00ff00",
        preto: "#000000"
    };

    if (cores[cor]) {
        document.body.style.backgroundColor = cores[cor];
    } else {
        document.documentElement.style.setProperty ('--cor-bg', cor)
    }
}
    

botaoTrocarCor.addEventListener('click', trocarCor)