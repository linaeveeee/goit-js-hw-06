const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const span = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  span.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  span.textContent = counterValue;
});
