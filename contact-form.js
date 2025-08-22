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
        // Muestra un mensaje de carga mientras se envía el formulario
        form.style.display = 'none';
        statusTitle.textContent = 'Enviando...';
        statusText.textContent = 'Por favor, espera un momento.';
        statusMessage.style.display = 'block';

        // Envía el formulario sin esperar una respuesta de CORS
        const response = await fetch(formActionURL, {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        });

        // Simula el éxito, ya que el modo 'no-cors' no retorna el estado
        statusTitle.textContent = '¡Gracias por tu mensaje!';
        statusText.textContent = 'Hemos recibido tu información y nos pondremos en contacto contigo a la brevedad.';

      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        statusTitle.textContent = 'Error al enviar';
        statusText.textContent = 'Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo o contáctanos por WhatsApp.';
      }
      
      statusMessage.style.display = 'block';
    });
  }
});
