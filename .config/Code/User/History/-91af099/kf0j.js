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

    if (progress >= 1) {
      star.remove();
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

if (progress >= 1) {
  star.remove();
  return;
}
