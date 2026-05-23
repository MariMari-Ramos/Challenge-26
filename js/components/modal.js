export function initModal() {
    const modal = document.getElementById('modal-config');

    if (!modal) return;

    const btnAbrir = document.querySelector('.abrir-config');
    const btnFechar = document.querySelector('.modal-close');

    btnAbrir.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    btnFechar.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', (e) => {

    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    });

    document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    });
}