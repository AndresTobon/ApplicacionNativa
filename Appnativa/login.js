document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = form.username.value;
        const password = form.password.value;

        // Lógica para autenticar al usuario, como enviar datos a una API

        alert('Login exitoso');
        window.localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html';
    });
});
