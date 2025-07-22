particlesJS("particles-js", {
  particles: {
    number: { value: 90, density: { enable: true, value_area: 900 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.9,
      random: true,
      anim: {
        enable: true,
        speed: 0.4,
        opacity_min: 0.2,
        sync: false
      }
    },
    size: {
      value: 2.5,
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: { enable: false },
    move: {
      enable: true,
      speed: 1.2,
      direction: "bottom-right",
      random: true,
      straight: true,
      out_mode: "out"
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
