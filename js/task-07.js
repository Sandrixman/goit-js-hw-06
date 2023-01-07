const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", editText);

function editText() {
  text.style.fontSize = `${input.valueAsNumber}px`;
}
