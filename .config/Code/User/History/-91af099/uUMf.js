// === CANVAS: Estrellas fijas titilantes ===
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

// === SVG: Cometa fugaz azul celeste ===
function lanzarCometaSVG() {
  const svg = document.getElementById("cometa-svg");

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.classList.add("cometa");

  const startX = Math.random() * window.innerWidth * 0.6;
  const startY = Math.random() * window.innerHeight * 0.6;
  const endX = startX + 600;
  const endY = startY + 300;

  line.setAttribute("x1", startX);
  line.setAttribute("y1", startY);
  line.setAttribute("x2", startX);
  line.setAttribute("y2", startY);
  line.setAttribute("stroke", "url(#fugaz-grad)");
  svg.appendChild(line);

  let startTime = null;
  const duration = 2000;

  function animar(time) {
    if (!startTime) startTime = time;
    const progress = (time - startTime) / duration;

    if (progress >= 1) {
      svg.removeChild(line);
      return;
    }

    const x2 = startX + progress * (endX - startX);
    const y2 = startY + progress * (endY - startY);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);

    requestAnimationFrame(animar);
  }

  requestAnimationFrame(animar);
}

setInterval(lanzarCometaSVG, 4000);

// === PARALLAX: Fondo estelar se mueve al scrollear ===
window.addEventListener("scroll", () => {
  const yOffset = window.pageYOffset;
  canvas.style.transform = `translateY(${yOffset * 0.1}px)`;
});
