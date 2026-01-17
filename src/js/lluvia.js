// src/js/lluvia.js
export function initRain() {
    const container = document.getElementById('rain-container');
    
    // GUARDIA: Si no hay contenedor, no hace nada
    if (!container) return;

    const createDrop = () => {
        const drop = document.createElement('div');
        drop.classList.add('ink-drop');

        // Posición horizontal aleatoria
        const xPos = Math.random() * 100 + 'vw';
        // Velocidad aleatoria entre 0.8s y 1.5s
        const duration = Math.random() * 0.7 + 0.8 + 's';
        // Opacidad y grosor variable para dar profundidad
        const opacity = Math.random() * 0.5 + 0.2;
        const width = Math.random() * 1.5 + 0.5 + 'px';

        drop.style.left = xPos;
        drop.style.animationDuration = duration;
        drop.style.opacity = opacity;
        drop.style.width = width;

        container.appendChild(drop);

        // Limpieza para no saturar la memoria
        setTimeout(() => {
            drop.remove();
        }, parseFloat(duration) * 1000);
    };

    // Crear gotas constantemente
    setInterval(createDrop, 40); // Genera una gota cada 50ms para un efecto denso
}