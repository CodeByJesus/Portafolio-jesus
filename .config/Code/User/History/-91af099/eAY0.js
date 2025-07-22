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
