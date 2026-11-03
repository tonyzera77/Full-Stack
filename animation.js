
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let imagem = new Image();
imagem.src = "imagens/c++.png";

let x = 150;
let y = 150;

let tamanho = 50;

function animacao() {

    ctx.clearRect(0, 0, 300, 300);

    ctx.drawImage(imagem, x - 25, y - 25, tamanho, tamanho);

    requestAnimationFrame(animacao);
}

imagem.onload = function() {
    animacao();
};

canvas.addEventListener("mousemove", function(evento) {

    let rect = canvas.getBoundingClientRect();

    x = evento.clientX - rect.left;
    y = evento.clientY - rect.top;

    if (x < 25) {
        x = 25;
    }

    if (x > 275) {
        x = 275;
    }

    if (y < 25) {
        y = 25;
    }

    if (y > 275) {
        y = 275;
    }

});
