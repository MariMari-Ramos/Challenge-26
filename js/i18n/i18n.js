import { pt } from './pt.js';
import { en } from './en.js';

const idiomas = { pt, en };

export function initI18n() {

    const selectLang = document.querySelector('#lang-select');

    const langSalvo = localStorage.getItem('lang') || 'en';

    aplicarIdioma(langSalvo);

    if (selectLang) {

        selectLang.value = langSalvo;

        selectLang.addEventListener('change', () => {

            const lang = selectLang.value;

            aplicarIdioma(lang);
            localStorage.setItem('lang', lang);
        });
    }
}

function aplicarIdioma(lang) {

    const pagina = document.body.dataset.page;

    const elementos = document.querySelectorAll('[data-i18n]');

    elementos.forEach(el => {
        const chave = el.getAttribute('data-i18n');

        const partes = chave.split('.'); 

        // Tenta buscar no dicionario da pagina primeiro
        let texto = idiomas[lang]?.[pagina];

        partes.forEach(p => {
            texto = texto?.[p];
        });

        // Se nao encontrou, tenta remover o prefixo da pagina
        // (caso o HTML use "contato.titulo" e o JSON tenha "titulo" direto)
        if (!texto && partes[0] === pagina) {
            texto = idiomas[lang]?.[pagina];
            partes.slice(1).forEach(p => {
                texto = texto?.[p];
            });
        }

        if (texto) {
            el.textContent = texto;
        }
    });
}