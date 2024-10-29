document
  .getElementById("form-cadastro-hospede")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtendo os dados do formulário
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const endereco = document.getElementById("endereco").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;

    // Criando o objeto do hóspede
    const hospede = {
      nome,
      cpf,
      endereco,
      telefone,
      email,
    };

    // Salvando em localStorage (ou qualquer armazenamento temporário)
    let hospedes = JSON.parse(localStorage.getItem("hospedes")) || [];
    hospedes.push(hospede);
    localStorage.setItem("hospedes", JSON.stringify(hospedes));

    alert("Hóspede cadastrado com sucesso!");
    this.reset(); // Limpa o formulário após o cadastro
  });
