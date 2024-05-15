document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('register-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = form.username.value;
        const password = form.password.value;

        // Aquí puedes agregar la lógica para registrar el usuario, como enviar datos a una API

        alert('Usuario registrado con éxito');
        window.location.href = 'index.html';
    });
});
