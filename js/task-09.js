function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

changeButton.addEventListener("click", handleClick);

function handleClick(event) {
  const randomColor = getRandomHexColor();
  colorSpan.textContent = randomColor;
  colorSpan.style.backgroundColor = randomColor;
}
