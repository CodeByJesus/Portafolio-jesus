const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
for (let i = 0; i < 120; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    opacity: Math.random()
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
    ctx.fill();
  });
}

setInterval(drawStars, 80);

function crearEstrellaFugaz() {
  const star = document.createElement("div");
  star.classList.add("shooting-star");

  // Posición aleatoria de inicio
  star.style.top = Math.random() * window.innerHeight * 0.8 + "px";
  star.style.left = Math.random() * window.innerWidth * 0.8 + "px";

  // Animación única por estrella
  const duracion = 3 + Math.random(); // 3–4s
  const desplazamientoX = 400 + Math.random() * 400; // 400–800px
  const desplazamientoY = 200 + Math.random() * 300; // 200–500px

  star.style.animation = `fugaz ${duracion}s ease-in-out`;
  star.style.transform = `rotate(-45deg)`;
  star.style.opacity = 0;

  document.querySelector(".estrellado").appendChild(star);

  // Eliminar después de la animación
  setTimeout(() => star.remove(), duracion * 1000);
}

// Lanza estrellas cada X segundos
setInterval(crearEstrellaFugaz, 3000);


