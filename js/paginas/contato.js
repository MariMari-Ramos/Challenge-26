// Validacao do formulario de contato
export function initContato() {
    const form = document.getElementById('form-contato');
    if (!form) return;

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const assunto = document.getElementById('assunto');
    const mensagem = document.getElementById('mensagem');
    const sucesso = document.getElementById('form-sucesso');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let valido = true;
        limparErros();

        // Valida nome
        if (nome.value.trim().length < 3) {
            mostrarErro('erro-nome', 'Nome deve ter pelo menos 3 caracteres');
            valido = false;
        }

        // Valida e-mail
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email.value.trim())) {
            mostrarErro('erro-email', 'Digite um e-mail valido');
            valido = false;
        }

        // Valida assunto
        if (assunto.value.trim().length < 3) {
            mostrarErro('erro-assunto', 'Assunto deve ter pelo menos 3 caracteres');
            valido = false;
        }

        // Valida mensagem
        if (mensagem.value.trim().length < 10) {
            mostrarErro('erro-mensagem', 'Mensagem deve ter pelo menos 10 caracteres');
            valido = false;
        }

        // Tudo certo - mostra mensagem de sucesso
        if (valido) {
            sucesso.classList.add('ativo');
            form.reset();

            setTimeout(() => {
                sucesso.classList.remove('ativo');
            }, 4000);
        }
    });
}

function mostrarErro(id, texto) {
    const erro = document.getElementById(id);
    if (erro) erro.textContent = texto;
}

function limparErros() {
    const erros = document.querySelectorAll('.form-erro');
    erros.forEach((erro) => (erro.textContent = ''));
}