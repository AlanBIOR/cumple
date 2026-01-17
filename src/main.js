// main.js
import './css/style.css'; 
import { initChapterUnlock } from './js/calendar.js';
import { initPetals } from './js/petalos.js';
import { initButterflies } from './js/mariposas.js';
import { initBrisa } from './js/brisa.js';
import { initRain } from './js/lluvia.js'; 
import { initGhostBoard } from './js/tablero.js';

document.addEventListener('DOMContentLoaded', () => {
    // Función segura para evitar bloqueos
    const safeRun = (fn) => { 
        try { 
            if (typeof fn === 'function') fn(); 
        } catch(e) { 
            console.error("Error ejecutando función:", e); 
        } 
    };

    safeRun(initPetals); 
    safeRun(initButterflies);
    safeRun(initBrisa);
    safeRun(initRain); 
    safeRun(initGhostBoard);
    safeRun(initChapterUnlock); // 👈 Esta es la única que debe quedar para el calendario
});