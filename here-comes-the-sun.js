(() => {
  const body = document.body;
  let r = 0,
    g = 0,
    b = 0;
  let frameCount = 0;
  const maxFrames = 60 * 5;
  const animate = () => {
    r++;
    g++;
    b++;
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    frameCount++;
    if (r <= 255 && g <= 255 && b <= 255 && frameCount <= maxFrames) {
      requestAnimationFrame(animate);
    }
  };
  requestAnimationFrame(animate);
})();
