// Estrellas fijas con canvas
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
    o: Math.random() * 0.5 + 0.5,
  });
}

function dibujarEstrellas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  estrellas.forEach(e => {
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${e.o})`;
    ctx.fill();
  });
}

setInterval(dibujarEstrellas, 100);

// Estrellas fugaces con div + animación suave
function lanzarEstrellaFugaz() {
  const star = document.createElement("div");
  star.className = "shooting-star";

  const startX = Math.random() * window.innerWidth * 0.8;
  const startY = Math.random() * window.innerHeight * 0.6;
  const deltaX = 500 + Math.random() * 300;
  const deltaY = 250 + Math.random() * 150;
  const duration = 2000 + Math.random() * 500;

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
      ? progress * 5
      : progress > 0.8
        ? (1 - progress) * 5
        : "1";

    requestAnimationFrame(animar);
  }

  requestAnimationFrame(animar);
}

setInterval(lanzarEstrellaFugaz, 3000);
