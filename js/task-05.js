const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  const enteredName = nameInput.value;
  nameOutput.textContent = enteredName || "Anonymous";
});
