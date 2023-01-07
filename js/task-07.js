const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", editText);

input.value = input.min;

function editText() {
  text.style.fontSize = `${input.valueAsNumber}px`;
}
