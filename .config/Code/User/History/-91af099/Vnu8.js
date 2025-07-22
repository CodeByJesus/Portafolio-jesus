function lanzarCometaSVG() {
  const svg = document.getElementById("cometa-svg");

  // Crea el gradiente si no existe
  if (!document.getElementById("fugaz-grad")) {
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    gradient.id = "fugaz-grad";
    gradient.setAttribute("x1", "0%");
    gradient.setAttribute("y1", "0%");
    gradient.setAttribute("x2", "100%");
    gradient.setAttribute("y2", "100%");

    const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", "#a2eafc");
    stop1.setAttribute("stop-opacity", "1");

    const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("stop-color", "#a2eafc");
    stop2.setAttribute("stop-opacity", "0");

    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.appendChild(defs);
  }

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.classList.add("cometa");
  line.setAttribute("stroke", "url(#fugaz-grad)");
  line.setAttribute("stroke-width", "3");
  line.setAttribute("stroke-linecap", "round");

  const startX = Math.random() * window.innerWidth * 0.6;
  const startY = Math.random() * window.innerHeight * 0.6;
  const endX = startX + 600;
  const endY = startY + 300;

  line.setAttribute("x1", startX);
  line.setAttribute("y1", startY);
  line.setAttribute("x2", startX);
  line.setAttribute("y2", startY);
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
