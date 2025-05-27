document.addEventListener('DOMContentLoaded', function () {
    console.log("Script da página principal carregado com sucesso!");

    const logoutButton = document.querySelector('.logout');
    logoutButton.addEventListener('click', function () {
        console.log("Usuário clicou em logout. Redirecionando para a página de login...");
        window.location.href = "../Login/index.html";
    });
});

document.querySelector('.logo').addEventListener('click', () => {
    window.location.href = "../PaginaPrincipal/index.html"; 
});

document.querySelector('.home-button').addEventListener('click', () => {
    window.location.href = "../PaginaPrincipal/index.html"; 
});