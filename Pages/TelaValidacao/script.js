document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Impede o envio padrão
            window.location.href = "../../index.html"; // Altere para o destino desejado
        });
    }
});