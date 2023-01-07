const input = document.querySelector("#font-size-control");

input.addEventListener("input", editText);

function editText() {
  text.style.fontSize = `${input.valueAsNumber}px`;
}
