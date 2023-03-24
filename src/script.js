const nome = document.querySelector('.myName');

const generateColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const neon = () => {
  nome.style.textShadow = `0 0 7px ${generateColor()}`;
};

setInterval(neon, 1000);
