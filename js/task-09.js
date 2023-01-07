const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");

const getRandomHexColor = () => {
  const randomHexColor = `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`;
  color.textContent = randomHexColor;
  document.body.style.backgroundColor = randomHexColor;
};

btn.addEventListener("click", getRandomHexColor);
