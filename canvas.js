
let canvas1 = document.getElementById("canvas1");
let canvas2 = document.getElementById("canvas2");

let ctx = canvas1.getContext("2d");

function desenhar_quadrado(x, y, largura, altura, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
}

function desenhar_linha(x1, y1, x2, y2, cor) {
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

function desenhar_arco(x, y, raio, inicio, fim, cor, preencher) {
    ctx.beginPath();
    ctx.arc(x, y, raio, inicio, fim);

    if (preencher == true) {
        ctx.fillStyle = cor;
        ctx.fill();
    }
    else {
        ctx.strokeStyle = cor;
        ctx.stroke();
    }

    ctx.closePath();
}

function escrever(texto, x, y, cor) {
    ctx.fillStyle = cor;
    ctx.font = "20px Arial";
    ctx.fillText(texto, x, y);
}

function desenhar_triangulo(x1, y1, x2, y2, x3, y3, cor) {
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fill();
    ctx.closePath();
}




ctx = canvas1.getContext("2d");


desenhar_quadrado(0, 0, 300, 300, "white");

// Quadrados-cima
desenhar_quadrado(0, 0, 50, 50, "blue");
desenhar_quadrado(250, 0, 50, 50, "red");

// Quadrados-lado
desenhar_quadrado(0, 120, 30, 30, "cyan");
desenhar_quadrado(0, 150, 30, 30, "cyan");

desenhar_quadrado(270, 135, 30, 30, "cyan");
desenhar_quadrado(270, 150, 30, 30, "cyan");

// Quadrado ddo meio
desenhar_quadrado(110, 150, 40, 40, "red");

// Quadrados baixo
desenhar_quadrado(0, 240, 30, 30, "yellow");
desenhar_quadrado(0, 270, 30, 30, "yellow");
desenhar_quadrado(30, 270, 30, 30, "yellow");

desenhar_quadrado(270, 240, 30, 30, "black");
desenhar_quadrado(270, 270, 30, 30, "black");
desenhar_quadrado(240, 270, 30, 30, "black");

// Linhas
desenhar_linha(50, 50, 150, 150, "blue");
desenhar_linha(250, 50, 150, 150, "red");

desenhar_linha(0, 150, 300, 150, "green");
desenhar_linha(150, 150, 150, 300, "black");


// Circulos superiores


desenhar_arco(150, 150, 60, Math.PI, 1.25 * Math.PI, "green", false);
desenhar_arco(150, 150, 80, Math.PI, 1.25 * Math.PI, "green", false);

desenhar_arco(150, 150, 60, 1.75 * Math.PI, 2 * Math.PI, "green", false);
desenhar_arco(150, 150, 80, 1.75 * Math.PI, 2 * Math.PI, "green", false);


// Circulos de baixo

desenhar_arco(150, 300, 80, Math.PI, 1.5 * Math.PI, "green", false);

desenhar_arco(150, 300, 60, 1.5 * Math.PI, 2 * Math.PI, "green", false);

// Circulo azul
desenhar_arco(150, 115, 15, 0, 2 * Math.PI, "cyan", true);
desenhar_arco(150, 115, 15, 0, 2 * Math.PI, "blue", false);

// Circulos amarelo
desenhar_arco(70, 220, 15, 0, 2 * Math.PI, "yellow", true);
desenhar_arco(70, 220, 15, 0, 2 * Math.PI, "green", false);

desenhar_arco(220, 220, 15, 0, 2 * Math.PI, "yellow", true);
desenhar_arco(220, 220, 15, 0, 2 * Math.PI, "green", false);

// Semicirculo de baixo
desenhar_arco(150, 300, 40, Math.PI, 2 * Math.PI, "cyan", true);
desenhar_arco(150, 300, 40, Math.PI, 2 * Math.PI, "green", false);

escrever("Canvas", 115, 48, "black");



ctx = canvas2.getContext("2d");

desenhar_quadrado(0, 0, 300, 300, "#90fbd3");

// Sol
desenhar_arco(225, 75, 37, 0, 2 * Math.PI, "yellow", true);

// Chao
desenhar_quadrado(0, 225, 300, 75, "gray");

// Rio
ctx.beginPath();
ctx.fillStyle = "#488cf5";

ctx.moveTo(0, 300);
ctx.lineTo(0, 188);

ctx.arc(0, 223, 35, 1.5 * Math.PI, 2 * Math.PI);

ctx.lineTo(35, 260);
ctx.lineTo(110, 260);

ctx.arc(110, 300, 40, 1.5 * Math.PI, 2 * Math.PI);

ctx.lineTo(0, 300);
ctx.fill();
ctx.closePath();

// Casa
desenhar_quadrado(112, 150, 75, 75, "saddlebrown");

// Telhado
desenhar_triangulo(112, 150, 149, 113, 187, 150, "tomato");

// Janelas
desenhar_quadrado(120, 165, 22, 25, "lightskyblue");
desenhar_quadrado(157, 165, 22, 25, "lightskyblue");

// Porta
desenhar_quadrado(144, 165, 12, 60, "#6b4f2a");

// Arvore da esquerda
desenhar_quadrado(38, 185, 15, 40, "saddlebrown");
desenhar_arco(45, 175, 22, 0, 2 * Math.PI, "forestgreen", true);

// Arvore da direita
desenhar_quadrado(262, 220, 15, 45, "saddlebrown");
desenhar_arco(269, 210, 22, 0, 2 * Math.PI, "forestgreen", true);
