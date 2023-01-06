const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", onInput);

function onInput(event) {
  if (input.value === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = `${event.currentTarget.value}`;
  }
}
