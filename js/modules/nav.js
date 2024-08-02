export function setupNav() {
    const nav = document.querySelector('.navegacao-primaria');
    const navToggle =  document.querySelector('.mobile-nav-toggle');

    navToggle.addEventListener('click', () => {
        const visibilidade = nav.getAttribute('data-visible');

        if(visibilidade === "false") {
            nav.setAttribute('data-visible', true);
            navToggle.setAttribute('aria-expended', true);
        } else if (visibilidade === "true") {
            nav.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expended', false);
        }
    });
}