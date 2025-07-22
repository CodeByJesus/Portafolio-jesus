document.addEventListener('DOMContentLoaded', () => {
  const starsCanvas = document.getElementById('stars');
  if (!starsCanvas) return;
  const starsCtx = starsCanvas.getContext('2d');

  let stars = [];
  const numStars = 300;

  function setCanvasSize() {
    starsCanvas.width = window.innerWidth;
    starsCanvas.height = window.innerHeight;
  }

  function createStars() {
    stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * starsCanvas.width,
        y: Math.random() * starsCanvas.height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        deltaAlpha: Math.random() * 0.02 - 0.01
      });
    }
  }

  function drawStars() {
    starsCtx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
    stars.forEach(star => {
      starsCtx.beginPath();
      starsCtx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      starsCtx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      starsCtx.fill();
    });
  }

  function updateStars() {
    stars.forEach(star => {
      star.alpha += star.deltaAlpha;
      if (star.alpha <= 0 || star.alpha >= 1) {
        star.deltaAlpha *= -1;
      }
    });
  }

  function animateStars() {
    drawStars();
    updateStars();
    requestAnimationFrame(animateStars);
  }

  // Inicialización
  setCanvasSize();
  createStars();
  animateStars();

  // Redimensionar el canvas si cambia el tamaño de la ventana
  window.addEventListener('resize', () => {
    setCanvasSize();
    createStars(); // Regenerar estrellas para el nuevo tamaño
  });
});
