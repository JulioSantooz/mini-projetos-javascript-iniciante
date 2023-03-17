const qtdTabuadas = document.getElementById("qtdTabuadas");
const tabuadasJaRealizadas = document.getElementById("tabuadasJaRealizadas");
var historicoTabuada = [];

function calcular() {
    var tabuada = Math.floor(frmTabuada.inputTabuada.value.replace(",","."));
    var resultado = 0;
    for(var cont = 1; cont <= 10; cont++) {
        resultado = tabuada * cont;
        document.getElementById(`operacao${cont}`).innerHTML = `<li>${tabuada} X ${cont} = ${resultado}</li>`;
    }
    historico(tabuada);
}

function resetar() {
    for(var cont = 1; cont <= 10; cont++) {
        document.getElementById(`operacao${cont}`).innerHTML = `<li>? X ${cont} = ?</li>`;
    }
}

function historico(tabuada) {
    historicoTabuada.push(tabuada);
    qtdTabuadas.innerHTML = `${historicoTabuada.length}`;
    
    for(x in historicoTabuada) {
        console.log(historicoTabuada[x])
        tabuadasJaRealizadas.innerHTML = `${historicoTabuada}`;
    } 
}
