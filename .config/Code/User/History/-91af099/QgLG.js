
// Fondo estelar con estrellas fijas que titilan
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const estrellas = [];
for (let i = 0; i < 100; i++) {
  estrellas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    baseOpacity: Math.random() * 0.6 + 0.3,
    phase: Math.random() * Math.PI * 2
  });
}

function dibujarEstrellas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  estrellas.forEach(e => {
    e.phase += 0.02;
    const opacity = e.baseOpacity + Math.sin(e.phase) * 0.2;
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${opacity})`;
    ctx.fill();
  });
}

setInterval(dibujarEstrellas, 50);

// Fugaces celestes
function lanzarEstrellaFugaz() {
  const star = document.createElement("div");
  star.className = "shooting-star";

  // Posición inicial aleatoria
  const startX = Math.random() * window.innerWidth * 0.8;
  const startY = Math.random() * window.innerHeight * 0.6;
  const deltaX = 500 + Math.random() * 400;
  const deltaY = 300 + Math.random() * 200;
  const duration = 1800 + Math.random() * 800;

  star.style.left = startX + "px";
  star.style.top = startY + "px";
  document.body.appendChild(star);

  let startTime = null;
  function animar(time) {
    if (!startTime) startTime = time;
    const progress = (time - startTime) / duration;

    if (progress >= 1 || isNaN(progress)) {
      star.remove();
      return;
    }

    const x = progress * deltaX;
    const y = progress * deltaY;

    star.style.transform = `translate(${x}px, ${y}px) rotate(-45deg)`;
    star.style.opacity = progress < 0.2
      ? progress * 6
      : progress > 0.8
        ? (1 - progress) * 6
        : "1";

    requestAnimationFrame(animar);
  }

  requestAnimationFrame(animar);
}

setInterval(lanzarEstrellaFugaz, 2500);
