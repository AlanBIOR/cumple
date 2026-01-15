// src/js/petalos.js
export function initPetals() {
    const container = document.getElementById('petal-container');
    if (!container) return;

    const petalCount = 50; // Aumentamos un poco más la cantidad

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('span');
        petal.classList.add('petal');
        
        // Decisión aleatoria: ¿Es un pétalo de fondo o de frente?
        if (Math.random() > 0.7) {
            petal.classList.add('is-background');
        }

        const size = Math.random() * 15 + 10 + 'px';
        const left = Math.random() * 100 + '%';
        const delay = Math.random() * 15 + 's';
        const duration = Math.random() * 12 + 10 + 's';

        petal.style.width = size;
        petal.style.height = size;
        petal.style.left = left;
        petal.style.top = '-20px';
        
        petal.style.animation = `
            fall ${duration} linear infinite ${delay}, 
            sway 4s ease-in-out infinite alternate ${delay}
        `;

        container.appendChild(petal);
    }
}