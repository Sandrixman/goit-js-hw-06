const input = document.querySelector("#validation-input");

input.addEventListener("blur", quantityVerification);

function quantityVerification() {
  if (input.value.length == input.dataset.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
