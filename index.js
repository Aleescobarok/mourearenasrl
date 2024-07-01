document.addEventListener('DOMContentLoaded', (event) => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (e.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    // Inicializar EmailJS
    emailjs.init('MoureArenaPage'); // Reemplaza con tu user_id de EmailJS

    // Integración con EmailJS
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const btn = document.getElementById('button');
        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_qyvws2y';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar Email';
                alert('¡Mensaje enviado, nos contactaremos con usted a la brevedad!');
            }, (err) => {
                btn.value = 'Enviar Email';
                alert(JSON.stringify(err));
            });
    });
});
