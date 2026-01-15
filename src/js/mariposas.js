// src/js/mariposas.js
export function initButterflies() {
    const container = document.getElementById('butterfly-migration');
    if (!container) return;

    const createButterfly = () => {
        const butterfly = document.createElement('div');
        butterfly.classList.add('butterfly-ink');
        
        // 1. Altura inicial aleatoria en TODO el documento
        const totalHeight = document.body.scrollHeight;
        // Restamos un margen para que no aparezcan justo en el borde inferior
        const yStart = Math.random() * (totalHeight - 100) + 50;
        butterfly.style.setProperty('--y-start', `${yStart}px`);

        // 2. Desplazamiento vertical aleatorio para el vuelo (curvatura)
        // Genera un valor entre -150px y 150px
        const yOffset = (Math.random() * 300) - 150;
        butterfly.style.setProperty('--y-offset', `${yOffset}px`);

        // 3. Duración y velocidad variadas
        // Mariposas más rápidas (15s) o más lentas (30s) para dar profundidad
        const duration = Math.random() * 15 + 15;
        butterfly.style.animationDuration = `${duration}s, 0.3s`;

        // Tamaño variable sutil para perspectiva
        const scale = Math.random() * 0.4 + 0.8; // Entre 0.8x y 1.2x
        butterfly.style.transform = `rotate(90deg) scale(${scale})`;

        container.appendChild(butterfly);

        // Limpieza
        setTimeout(() => butterfly.remove(), duration * 1000 + 1000);
    };

    // Ráfaga inicial para poblar la página
    for(let i = 0; i < 8; i++) {
        setTimeout(createButterfly, Math.random() * 3000);
    }

    // Creación continua más frecuente
    setInterval(createButterfly, Math.random() * 2000 + 1500);
}