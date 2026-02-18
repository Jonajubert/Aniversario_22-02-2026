// 🎵 Música
const music = document.getElementById("music");
document.getElementById("playMusic").addEventListener("click", () => {
    music.play();
});

// 🌌 Fondo estrellado
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 200; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

setInterval(drawStars, 50);

// 🦂 Constelación Escorpio
const scorpioCanvas = document.getElementById("scorpioCanvas");
const scorpioCtx = scorpioCanvas.getContext("2d");

scorpioCanvas.width = 400;
scorpioCanvas.height = 300;

const points = [
    [50, 200], [100, 150], [150, 180],
    [200, 130], [250, 170], [300, 120],
    [350, 160]
];

scorpioCtx.strokeStyle = "white";
scorpioCtx.beginPath();
scorpioCtx.moveTo(points[0][0], points[0][1]);
points.forEach(p => scorpioCtx.lineTo(p[0], p[1]));
scorpioCtx.stroke();

points.forEach(p => {
    scorpioCtx.beginPath();
    scorpioCtx.arc(p[0], p[1], 4, 0, Math.PI * 2);
    scorpioCtx.fillStyle = "white";
    scorpioCtx.fill();
});

// 🗓 Timeline animado
const events = document.querySelectorAll(".event");
window.addEventListener("scroll", () => {
    events.forEach(event => {
        const position = event.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            event.classList.add("visible");
        }
    });
});

// 🖼 Carrusel
let current = 0;
const images = document.querySelectorAll(".carousel img");
images[current].classList.add("active");

document.querySelector(".next").addEventListener("click", () => {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", () => {
    images[current].classList.remove("active");
    current = (current - 1 + images.length) % images.length;
    images[current].classList.add("active");
});

// 🎁 Sorpresa
document.getElementById("btnSorpresa").addEventListener("click", () => {
    document.getElementById("mensajeOculto").innerText =
    "Elegirte fue la mejor decisión de mi vida. Y volvería a hacerlo mil veces más.";
});
