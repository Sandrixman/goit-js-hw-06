const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsArray = ingredients.map((ingredient) => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.textContent = `${ingredient}`;
  ingredientsEl.classList.add("item");
  return ingredientsEl;
});

ingredientsList.append(...ingredientsArray);
