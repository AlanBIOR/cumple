// src/js/mariposas.js
export function initButterflies() {
    const container = document.getElementById('butterfly-container');
    if (!container) return;

    const createButterfly = () => {
        const butterfly = document.createElement('div');
        butterfly.classList.add('butterfly-ink');
        
        // Altura aleatoria (entre el 15% y 85% de la pantalla)
        const yPos = Math.random() * 70 + 15 + 'vh';
        butterfly.style.setProperty('--y-start', yPos);

        // Duración del vuelo (entre 12 y 18 segundos)
        const duration = Math.random() * 6 + 12 + 's';
        butterfly.style.animationDuration = `${duration}, 0.4s`;

        container.appendChild(butterfly);

        // Limpieza automática para evitar lentitud en el navegador
        setTimeout(() => {
            butterfly.remove();
        }, parseFloat(duration) * 1000);
    };

    // Crear la primera mariposa de inmediato
    createButterfly();

    // Generar una nueva cada 6 a 10 segundos (aparición ocasional)
    setInterval(createButterfly, Math.random() * 4000 + 6000);
}