// main.js
import './sass/style.scss'; 
import { initCalendar } from './js/calendar.js'; 
import { initPetals } from './js/pelatos.js'; // Corregido el nombre y la ruta
import { initButterflies } from './js/mariposas.js';

document.addEventListener('DOMContentLoaded', () => {
    initCalendar(); // Carga el calendario si estás en el index
    initPetals();   // Carga los pétalos si estás en el Capítulo I
    initButterflies();
});