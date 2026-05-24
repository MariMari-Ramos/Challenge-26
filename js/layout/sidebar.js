export function initSidebar() {

    const sidebar = document.querySelector('.barra_lateral');
    const toggleBtn = document.querySelector('.toggle-sidebar');

    // abre/fecha pelo botão
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // fecha ao clicar fora
    document.addEventListener('click', (e) => {

        const clicouDentroSidebar = sidebar.contains(e.target);
        const clicouNoBotao = toggleBtn.contains(e.target);

        if (!clicouDentroSidebar && !clicouNoBotao) {
            sidebar.classList.remove('open');
        }

    });

}