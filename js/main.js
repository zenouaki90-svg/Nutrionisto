document.addEventListener('DOMContentLoaded', () => {
    
    // === 1. MENÚ HAMBURGUESA (MÓVIL) ===
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Cerrar el menú automáticamente al hacer click en cualquier link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });
    });


    // === 2. VALIDACIÓN DEL FORMULARIO DE CONTACTO ===
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const successMsg = document.getElementById('success-msg');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevenir el envío automático
        
        let isValid = true;

        // Limpiar errores previos y mensaje de éxito
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        successMsg.textContent = '';

        // Validación de Nombre (No vacío)
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Por favor, escribe tu nombre completo.';
            isValid = false;
        }

        // Validación de Email (Contiene '@')
        if (!emailInput.value.includes('@') || emailInput.value.trim() === '') {
            emailError.textContent = 'Por favor, ingresa un correo electrónico válido.';
            isValid = false;
        }

        // Validación de Mensaje (No vacío)
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Por favor, escribe el motivo de tu consulta.';
            isValid = false;
        }

        // Si todo es válido, mostrar éxito y limpiar formulario
        if (isValid) {
            successMsg.textContent = '¡Mensaje enviado con éxito! Te contactaré pronto.';
            contactForm.reset();
        }
    });


    // === 3. BOTÓN VOLVER ARRIBA ===
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // === 4. MODO OSCURO (OPCIONAL) ===
    const darkModeBtn = document.getElementById('dark-mode-btn');
    
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // Cambiar el icono del botón dinámicamente
        if (document.body.classList.contains('dark-theme')) {
            darkModeBtn.textContent = '☀️';
        } else {
            darkModeBtn.textContent = '🌙';
        }
    });
});
