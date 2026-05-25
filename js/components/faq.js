export function initFaq() {
    const itens = document.querySelectorAll('.faq-item');
    if (!itens.length) return;

    itens.forEach((item) => {
        const pergunta = item.querySelector('.faq-pergunta');

        pergunta.addEventListener('click', () => {
            item.classList.toggle('ativo');
        });
    });
}