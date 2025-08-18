document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const statusMessage = document.getElementById('status-message');
    const statusTitle = document.getElementById('status-title');
    const statusText = document.getElementById('status-text');
    const formActionURL = 'https://docs.google.com/forms/d/e/1FAIpQLSelsdhNiJpAjtws-8DmcWVid5VIcoLP9VQ1EgVLan3XPQaJQw/formResponse';

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);

            try {
                // Se utiliza async/await para manejar la promesa de fetch
                const response = await fetch(formActionURL, {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors' // Modo necesario para enviar a Google Forms
                });

                // Aunque la respuesta en 'no-cors' no se puede leer,
                // asumimos que fue exitosa si no hubo un error de red.
                form.style.display = 'none';
                statusTitle.textContent = '¡Gracias por tu mensaje!';
                statusText.textContent = 'Hemos recibido tu información y nos pondremos en contacto contigo a la brevedad.';
                statusMessage.style.display = 'block';

            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                // En caso de error, mostramos un mensaje al usuario
                statusTitle.textContent = 'Error al enviar';
                statusText.textContent = 'Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo o contáctanos por WhatsApp.';
                statusMessage.style.display = 'block';
            }
        });
    }
});
