let canvas = document.getElementById("drawingArea");
var context = canvas.getContext("2d");

// position, speed and radius variables

let score = 0;
let x = 300;
let y = 200;
let vx = 2;
let vy = 3;
let raio = 10;
let padx = 270;
let pady = 350;
let padw = 60;
let padh = 10;




setInterval(Draw, 20);
setInterval(Paddle, 20);

Paddle();

canvas.addEventListener("mousemove", function (event) {
    if (event.defaultPrevented) {
        return;
    }

    let mouseX = event.clientX;

    let rect = canvas.getBoundingClientRect();
    mouseX = mouseX - rect.left;

    if (mouseX > 10 && mouseX < 530) padx = mouseX;


    event.preventDefault();

    Paddle();

}, true);

function Draw() {
    // clear canvas

    context.clearRect(0, 0, canvas.width, 350);
    context.clearRect(0, 350, canvas.width, 50);


    // ball shape, appearence, position and velocity

    context.beginPath();
    context.arc(x, y, raio, 0, 2 * Math.PI);
    context.fillStyle = "#FFFFFF"
    context.fill();
    context.closePath();


    x = x + vx;
    y = y + vy;

    console.log(y);
    if (x >= 600 - raio || x <= raio) vx = -vx;
    if (y >= 400 - raio || y <= 80 - raio) vy = -vy;

    if (y > pady - raio && x > padx - raio && x <= padx + padw) vy = -vy;
    if (y > pady - raio && x > padx - raio && x <= padx + padw) score += 1;;

    if (y > pady) score = 0;

    context.fillStyle = "#3a3a3a";
    context.fillRect(0, 0, 600, 52);


    context.font = "30px Montserrat"
    context.fillStyle = "#ffffff";
    context.fillText(score, 15, 40);


    // dashed line
    context.beginPath();
    context.setLineDash([5, 22]);
    context.moveTo(0, 355);
    context.lineTo(600, 355);
    context.strokeStyle = "#ffffff";
    context.stroke();
    context.closePath();
}

function Paddle() {

    context.beginPath();
    context.setLineDash([]);
    context.rect(padx, pady, padw, padh);
    context.fillStyle = "#333333";
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = "#3d3d3d";
    context.stroke();
    context.closePath();
}

