document.addEventListener('DOMContentLoaded', function () {
    console.log("Script da página principal carregado com sucesso!");

    addClickListener('.logout', function () {
        console.log("Usuário clicou em logout. Redirecionando para a página de login...");
        window.location.href = "../../index.html";
    });
});

