// 🎵 Música
const music = document.getElementById("music");
document.getElementById("playMusic").addEventListener("click", () => {
    music.play();
});

// 🌙 Modo noche
document.getElementById("modoNoche").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// 🌌 Fondo estrellas
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 200; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(drawStars);
}
drawStars();

// 🌌 Mapa estelar simbólico 22-02-2025 Eldorado 10AM
const sky = document.getElementById("skyMap");
const skyCtx = sky.getContext("2d");

sky.width = 500;
sky.height = 400;

for (let i = 0; i < 150; i++) {
    skyCtx.beginPath();
    skyCtx.arc(Math.random() * 500, Math.random() * 400, 2, 0, Math.PI * 2);
    skyCtx.fillStyle = "white";
    skyCtx.fill();
}

// 🖼 Carrusel FUNCIONAL
let current = 0;
const images = document.querySelectorAll(".carousel img");

function showImage(index) {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
}

showImage(current);

document.querySelector(".next").addEventListener("click", () => {
    current = (current + 1) % images.length;
    showImage(current);
});

document.querySelector(".prev").addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
});
