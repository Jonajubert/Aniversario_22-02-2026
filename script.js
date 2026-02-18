// =============================
// 🌌 FONDO ESTRELLADO CINEMÁTICO
// =============================

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
let mouse = { x: null, y: null };

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

for (let i = 0; i < 250; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.vy *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    });

    // Conectar estrellas cercanas
    for (let i = 0; i < stars.length; i++) {
        for (let j = i; j < stars.length; j++) {
            let dx = stars[i].x - stars[j].x;
            let dy = stars[i].y - stars[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.strokeStyle = "rgba(255,255,255,0.1)";
                ctx.beginPath();
                ctx.moveTo(stars[i].x, stars[i].y);
                ctx.lineTo(stars[j].x, stars[j].y);
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animateStars);
}

animateStars();


// =============================
// 🕰 CUENTA REGRESIVA
// =============================

const countdownDate = new Date("Feb 22, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const counter = document.getElementById("countdown");
    if (counter) {
        counter.innerHTML = "Faltan " + days + " días para nuestro segundo aniversario 💫";
    }

}, 1000);


// =============================
// 🖼 CARRUSEL CON FADE
// =============================

let current = 0;
const images = document.querySelectorAll(".carousel img");

function showImage(index) {
    images.forEach(img => img.style.opacity = 0);
    images[index].style.opacity = 1;
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


// =============================
// 🎵 MÚSICA CON FADE IN
// =============================

const music = document.getElementById("music");
const playBtn = document.getElementById("playMusic");

if (playBtn) {
    playBtn.addEventListener("click", () => {
        music.volume = 0;
        music.play();

        let fade = setInterval(() => {
            if (music.volume < 0.9) {
                music.volume += 0.05;
            } else {
                clearInterval(fade);
            }
        }, 200);
    });
}


// =============================
// 💌 CARTA DESPLEGABLE
// =============================

const btnCarta = document.getElementById("abrirCarta");

if (btnCarta) {
    btnCarta.addEventListener("click", () => {
        document.getElementById("cartaContenido").classList.toggle("visible");
    });
}
