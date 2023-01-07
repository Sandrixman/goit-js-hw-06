const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destoyBoxes);

function createBoxes() {
  passArgument(input.value);
}
function passArgument(amount) {
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
}

function destoyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
