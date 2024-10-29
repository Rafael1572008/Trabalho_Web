const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const email = "isabella@gmail.com";
const senha = "12345";

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === email && password === senha) {
    window.location.href = "/up_/funcionario/painel.html";
  } else {
    alert("Usuário ou senha incorretos");
  }
});
