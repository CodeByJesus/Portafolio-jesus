function lanzarEstrellaFugaz() {
  const star = document.createElement("div");
  star.className = "shooting-star";

  // Posición aleatoria
  const startX = Math.random() * window.innerWidth * 0.8;
  const startY = Math.random() * window.innerHeight * 0.6;
  const deltaX = 500 + Math.random() * 300;
  const deltaY = 300 + Math.random() * 200;
  const duration = 2000 + Math.random() * 1000;

  star.style.left = startX + "px";
  star.style.top = startY + "px";
  star.style.opacity = "0";
  document.body.appendChild(star);

  let startTime = null;

  function animarFugaz(time) {
    if (!startTime) startTime = time;
    const progress = time - startTime;
    const percent = progress / duration;

    const moveX = percent * deltaX;
    const moveY = percent * deltaY;
    star.style.transform = `translate(${moveX}px, ${moveY}px) rotate(-45deg)`;

    if (percent < 0.2) {
      star.style.opacity = percent * 5;
    } else if (percent > 0.8) {
      star.style.opacity = (1 - percent) * 5;
    } else {
      star.style.opacity = "1";
    }

    if (percent < 1) {
      requestAnimationFrame(animarFugaz);
    } else {
      star.remove();
    }
  }

  requestAnimationFrame(animarFugaz);
}

// Lanza una nueva cada 3.5 segundos
setInterval(lanzarEstrellaFugaz, 3500);


