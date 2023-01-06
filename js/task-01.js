const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

categories.forEach((element) => {
  const category = element.firstElementChild.textContent;
  const elements = element.lastElementChild.children.length;
  console.log("Category:", category);
  console.log("Elements:", elements);
});
