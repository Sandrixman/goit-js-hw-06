const buttonIncr = document.querySelector("button[data-action='increment']");
const buttonDecr = document.querySelector("button[data-action='decrement']");
const value = document.getElementById("value");

let counterValue = 0;
buttonIncr.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});

buttonDecr.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
