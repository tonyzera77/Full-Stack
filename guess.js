
let sorteado = Math.floor(Math.random() * 100);

function verificar() {

    let numero = document.getElementById("numero").value;

    if (numero == "") {
        document.getElementById("resultado").innerHTML =
            "Digite um número!";
    }

    else if (numero < 0 || numero > 99) {
        document.getElementById("resultado").innerHTML =
            "Digite um número entre 0 e 99!";
    }

    else if (Number(numero) > sorteado) {
        document.getElementById("resultado").innerHTML =
            "O número sorteado é menor!";

        document.getElementById("resultado").style.setProperty(
            "background-color", "red"
        );
    }

    else if (Number(numero) < sorteado) {
        document.getElementById("resultado").innerHTML =
            "O número sorteado é maior!";

        document.getElementById("resultado").style.setProperty(
            "background-color", "red"
        );
    }

    else {
        document.getElementById("resultado").innerHTML =
            "Parabéns! Você acertou!";

        document.getElementById("resultado").style.setProperty(
            "background-color", "lightgreen"
        );
    }
}
