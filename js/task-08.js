const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Ви не заповнили усі поля");
  } else {
    console.log(`Email: ${email.value} || Password: ${password.value}`);
    form.reset();
  }
});
