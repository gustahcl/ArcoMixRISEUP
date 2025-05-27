function addClickListener(selector, callback) {
    const el = document.querySelector(selector);
    if (el) {
        el.addEventListener('click', callback);
    }
}

addClickListener('.home-button', () => {
    window.location.href = "../PaginaPrincipal/index.html";
});