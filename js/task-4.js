const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = registerForm.elements.email;
  const passwordInput = registerForm.elements.password;

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(formData);
    registerForm.reset();
  }
});
