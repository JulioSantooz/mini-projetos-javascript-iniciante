const playerPedra = document.getElementById("pedra");
const playerPapel = document.getElementById("papel");
const playerTesoura = document.getElementById("tesoura");
const pc = document.getElementById("pc");
const placar = document.getElementById("placar");

function jogar() {
    if( playerPedra.checked == false && 
        playerPapel.checked == false && 
        playerTesoura.checked == false  ) {
            alert("Selecione uma opção")
    } else {
        pcEscolhe();
        var sorteio = pcEscolhe();
        comparacao(sorteio);
    }
}

function resetar() {
    pc.src="img/pc.png";
    placar.innerHTML="";
}

function pcEscolhe() {
    let sorteio = Math.floor(Math.random() * 3);

    switch(sorteio) {
        case 0:
            pc.src="img/pcpedra.png";
            break;
        case 1:
            pc.src="img/pcpapel.png";
            break;
        case 2:
            pc.src="img/pctesoura.png";
            break;
    }
    return sorteio;
}

function comparacao(sorteio) {
    if((playerPedra.checked == true && sorteio == 0)  ||
       (playerPapel.checked == true && sorteio == 1)  ||
       (playerTesoura.checked == true && sorteio == 2)) {
            placar.innerHTML = "Empate";
    } else if((playerPedra.checked == true && sorteio == 2)  ||
              (playerPapel.checked == true && sorteio == 0)  ||
              (playerTesoura.checked == true && sorteio == 1)) {
                    placar.innerHTML = "Jogador Venceu!";
    } else if((playerPedra.checked == true && sorteio == 1)  ||
              (playerPapel.checked == true && sorteio == 2)  ||
              (playerTesoura.checked == true && sorteio == 0)) {
                    placar.innerHTML = "Computador Venceu!";
    }
}