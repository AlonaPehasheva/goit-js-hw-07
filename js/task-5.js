function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backgroundColorBody = document.body;
const colorSpan = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', () => {
  const newBackgroundColorBody = getRandomHexColor();

  backgroundColorBody.style.backgroundColor = newBackgroundColorBody;

  colorSpan.textContent = newBackgroundColorBody;
});
