// js/hospedes.js

document.addEventListener("DOMContentLoaded", function () {
  const formHospede = document.getElementById("form-hospede");
  const listaHospedes = document.getElementById("lista-hospedes");

  // Carrega os hóspedes do localStorage
  const hospedes = JSON.parse(localStorage.getItem("hospedes")) || [];

  // Exibe os hóspedes já cadastrados
  atualizarListaHospedes();

  formHospede.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = formHospede.elements[0].value;
    const cpf = formHospede.elements[1].value;
    const endereco = formHospede.elements[2].value;
    const telefone = formHospede.elements[3].value;
    const email = formHospede.elements[4].value;

    hospedes.push({ nome, cpf, endereco, telefone, email });

    // Atualiza o localStorage
    localStorage.setItem("hospedes", JSON.stringify(hospedes));

    atualizarListaHospedes();
    formHospede.reset();
  });

  function atualizarListaHospedes() {
    listaHospedes.innerHTML = "";

    hospedes.forEach((hospede) => {
      const li = document.createElement("li");
      li.textContent = `Nome: ${hospede.nome}, CPF: ${hospede.cpf}, Endereço: ${hospede.endereco}, Telefone: ${hospede.telefone}, Email: ${hospede.email}`;
      listaHospedes.appendChild(li);
    });
  }
});
