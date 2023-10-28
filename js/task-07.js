const fontSizeControl = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");
textElement.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener("input", handleInput);

function handleInput(event) {
  const fontSize = fontSizeControl.value;
  textElement.style.fontSize = `${fontSize}px`;
}
