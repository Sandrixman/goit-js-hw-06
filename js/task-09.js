const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  color.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
