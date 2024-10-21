document.addEventListener('DOMContentLoaded', function() {
    //botòn conocenos màs
    document.getElementById('conocenosBtn').addEventListener("click", function() {
        alert("Gracias por tu interés en Confecciones Alejandra. ¡Descubre nuestros productos!");
    });

    // Validación con fm de contacto
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Obtiene valores de los campos del formulario
        const nombre = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('message').value;

        // Verifica si los campos están completos
        if (nombre && email && mensaje) {
            alert('¡Gracias por contactarnos, ' + nombre + '! Te responderemos pronto.');
            this.reset(); 
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});
