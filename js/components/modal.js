export function initModal() {
    const modal = document.getElementById('modal-config');

    if (!modal) return;

    const btnAbrir = document.querySelector('.abrir-config');
    const btnFechar = document.querySelector('.modal-close');

    btnAbrir.addEventListener('click', () => {
        modal.classList.add('active');
    });

    btnFechar.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}