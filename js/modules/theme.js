export function setupTheme () {
    let button = document.getElementById('button-theme');
    let body = document.querySelector('body');
    let header = document.querySelector('header'); 
    let footer = document.querySelector('footer');

    button.addEventListener('click', () =>{
        button.classList.toggle('dark');
        body.classList.toggle('dark');
        header.classList.toggle('dark');
        footer.classList.toggle('dark');
    });
}
