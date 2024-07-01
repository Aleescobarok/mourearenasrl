document.addEventListener('DOMContentLoaded', (event) => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
        if (e.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    // Inicializar EmailJS
    emailjs.init('MoureArenaPage'); // Reemplaza con tu user_id de EmailJS

    // Integración con EmailJS
    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        
        // Enviar el formulario
        emailjs.sendForm('service_6s7pngk', 'template_qyvws2y', this)
            .then(function(response) {
                alert('Mensaje enviado, nos contactaremos con usted a la brevedad!');
                window.location.href = 'index.html';
            }, function(error) {
                alert('Error al enviar el mensaje. Inténtelo de nuevo más tarde.');
            });
    });
});
