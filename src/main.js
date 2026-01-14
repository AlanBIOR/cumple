// main.js
import './sass/style.scss'; // Importa tu archivo SASS principal aquí
import { initCalendar } from './js/calendar.js'; // Importaremos la lógica desde otro archivo

// Arrancamos la aplicación
document.addEventListener('DOMContentLoaded', () => {
    initCalendar();
});