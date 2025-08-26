// Validação do formulário de contato
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Previne o envio do formulário

        // Verifica se todos os campos foram preenchidos
        if (nomeInput.value.trim() === '' || emailInput.value.trim() === '' || mensagemInput.value.trim() === '') {
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        } else {
            // Exibe a mensagem de sucesso
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';

            // Limpa os campos
            nomeInput.value = '';
            emailInput.value = '';
            mensagemInput.value = '';
        }
    });
});
