// ========================
// 🌌 FONDO ESTRELLADO FLUIDO
// ========================

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let stars = [];
let numStars = window.innerWidth < 768 ? 120 : 250;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    star.x += star.dx;
    star.y += star.dy;

    if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
    if (star.y < 0 || star.y > canvas.height) star.dy *= -1;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  });

  // Conectar estrellas cercanas
  for (let i = 0; i < stars.length; i++) {
    for (let j = i; j < stars.length; j++) {
      let dx = stars[i].x - stars[j].x;
      let dy = stars[i].y - stars[j].y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 90) {
        ctx.strokeStyle = "rgba(255,255,255,0.08)";
        ctx.beginPath();
        ctx.moveTo(stars[i].x, stars[i].y);
        ctx.lineTo(stars[j].x, stars[j].y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animate);
}
animate();
