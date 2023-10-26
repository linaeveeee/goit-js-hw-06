const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", handleInput);

function handleInput(event) {
  const inputDataLength = Number(inputElement.dataset.length);
  const inputLength = Number(inputElement.value.length);

  if (inputLength === inputDataLength) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
}
