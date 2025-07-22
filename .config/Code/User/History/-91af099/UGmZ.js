function lanzarEstrellaFugaz() {
  const star = document.createElement("div");
  star.className = "shooting-star";

  // Posición inicial aleatoria
  const startX = Math.random() * window.innerWidth * 0.8;
  const startY = Math.random() * window.innerHeight * 0.6;
  const deltaX = 600 + Math.random() * 400; // Más recorrido horizontal
  const deltaY = 300 + Math.random() * 200;
  const duration = 2000 + Math.random() * 1000;

  star.style.left = startX + "px";
  star.style.top = startY + "px";
  document.body.appendChild(star);

  let startTime = null;

  function animar(time) {
    if (!startTime) startTime = time;
    const elapsed = time - startTime;
    const progress = elapsed / duration;

    if (progress >= 1 || isNaN(progress)) {
  if (star) star.remove();
  return;
}


    const x = progress * deltaX;
    const y = progress * deltaY;

    // Movimiento suave con opacidad brillante y difuminado
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

// Lanzar una cada 2.5 segundos
setInterval(lanzarEstrellaFugaz, 2500);

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const estrellas = [];
for (let i = 0; i < 120; i++) {
  estrellas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.8,
    o: Math.random() * 0.8 + 0.2,
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

setInterval(dibujarEstrellas, 80);
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.6,
      random: true,
      anim: { enable: true, speed: 0.4, opacity_min: 0.3, sync: false }
    },
    size: {
      value: 2,
      random: true,
      anim: { enable: false, speed: 20, size_min: 0.2, sync: false }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "bottom-right",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    }
  },
  retina_detect: true
});


