
function on() {
    document.getElementById("lamp").src="img/on.jpg";
}

function off() {
    document.getElementById("lamp").src="img/off.jpg";
}

function blink() {
    var intervalo = 0, cont = 0;
    while(cont < 10) {
        intervalo += 300;
        setTimeout("document.getElementById(\"lamp\").src=\"img/on.jpg\"",intervalo);
        intervalo += 300;
        setTimeout("document.getElementById(\"lamp\").src=\"img/off.jpg\"",intervalo);
        cont++;
    }
}