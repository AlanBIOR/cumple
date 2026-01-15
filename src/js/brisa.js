// src/js/brisa.js
export function initBrisa() {
    const container = document.querySelector('.visual-center');
    const image = document.querySelector('.central-botanical');
    
    if (!container || !image) return;

    // Función para crear partículas de polen dorado
    const createPollen = (x, y) => {
        const particle = document.createElement('span');
        particle.classList.add('pollen-particle');
        
        // Posicionamiento
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Aleatoriedad para realismo
        const size = Math.random() * 6 + 2 + 'px';
        particle.style.width = size;
        particle.style.height = size;
        
        // Movimiento aleatorio horizontal
        const drift = (Math.random() - 0.5) * 100 + 'px';
        particle.style.setProperty('--drift', drift);

        container.appendChild(particle);

        // Limpiar el DOM después de la animación
        setTimeout(() => particle.remove(), 2000);
    };

    // Evento de movimiento
    container.addEventListener('mousemove', (e) => {
        // Obtenemos coordenadas relativas al contenedor
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Solo creamos polen ocasionalmente para no saturar
        if (Math.random() > 0.85) {
            createPollen(x, y);
        }
    });

    // Soporte para móviles (Touch)
    container.addEventListener('touchmove', (e) => {
        const rect = container.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        if (Math.random() > 0.8) {
            createPollen(x, y);
        }
    }, { passive: true });
}