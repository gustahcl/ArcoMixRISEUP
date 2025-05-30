function addClickListener(selector, callback) {
    const el = document.querySelector(selector);
    if (el) {
        el.addEventListener('click', callback);
    }
}

addClickListener('.home-button', () => {
    window.location.href = "../PaginaPrincipal/index.html";
});

addClickListener('.home-button-func', () => {
    window.location.href = "../PaginaPrincipalFunc/index.html";
});

addClickListener('.logo', () => {
    window.location.href = "../PaginaPrincipal/index.html";
});

addClickListener('.logoFunc', () => {
    window.location.href = "../PaginaPrincipalFunc/index.html";
});