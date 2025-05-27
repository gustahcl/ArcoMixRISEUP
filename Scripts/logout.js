function addClickListener(selector, callback) {
    const el = document.querySelector(selector);
    if (el) {
        el.addEventListener('click', callback);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log("Script da página principal carregado com sucesso!");

    addClickListener('.logout', function () {
        console.log("Usuário clicou em logout. Redirecionando para a página de login...");
        window.location.href = "../Login/index.html";
    });
});

addClickListener('.logo', () => {
    window.location.href = "../PaginaPrincipal/index.html";
});

addClickListener('.home-button', () => {
    window.location.href = "../PaginaPrincipal/index.html";
});

addClickListener('.visitas-button', () => {
    window.location.href = "../StatusVisita/index.html";
});

addClickListener('.submit2', () => {
    window.location.href = "../AgendarVisitas/index.html";
});

document.addEventListener('DOMContentLoaded', function () {
    // ...existing code...

    // Redireciona ao enviar o formulário
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Impede o envio padrão
            window.location.href = "../VisitasMarcadas/index.html"; // Altere para o destino desejado
        });
    }
});