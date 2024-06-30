document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.getElementById('developer-button').addEventListener('click', function() {
        document.getElementById('developer-modal').style.display = 'block';
    });

    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('developer-modal').style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == document.getElementById('developer-modal')) {
            document.getElementById('developer-modal').style.display = 'none';
        }
    });

    document.getElementById('developer-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const password = document.getElementById('developer-password').value;
        if (password === '22102006') {
            alert('Access granted!');
            // Lógica para permitir edição do site
        } else {
            alert('Incorrect password!');
        }
    });
});
