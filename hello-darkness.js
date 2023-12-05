// Starting with the RGB values for white
let r = 255,
  g = 255,
  b = 255;
const darkenBackground = () => {
  r = r > 0 ? r - 1 : 0;
  g = g > 0 ? g - 1 : 0;
  b = b > 0 ? b - 1 : 0;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  if (r === 0 && g === 0 && b === 0) {
    clearInterval(intervalId);
  }
};
let intervalId = setInterval(darkenBackground, 500);
