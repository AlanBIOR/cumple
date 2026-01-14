// Contenido del calendario
const daysContent = {
    22: { 
        title: "Día I: El Diagnóstico", 
        text: "Doctora, el diagnóstico es claro: un exceso de cardio y lecturas profundas. Prescripción para hoy: 15 minutos de baile libre para soltar el cuerpo y un smoothie de frutos rojos. Es el primer paso de estos 19.",
        img: "/assets/img/flor1.png" // Agregué coma antes y extensión .png
    },
    23: { 
        title: "Día II: El Hallazgo", 
        text: "Como escribía Sabato: 'Todo era imprevisto, nada se podía pronosticar'. Hoy el azar dice que te detengas en la página 19 de tu libro actual y encuentres una palabra que te defina. Esa es mi recomendación literaria de hoy.",
        img: "/assets/img/flor2.png"
    },
    24: { 
        title: "Día III: Signos Vitales", 
        text: "Tu pulso no miente, está en clave morse pidiendo un descanso. Hoy la receta médica es simple: Mate o café, un rompecabezas a medio armar y cero distracciones. Tus signos vitales agradecen este momento.",
        img: "/assets/img/flor3.png"
    },
    25: { 
        title: "Día IV: Sístole y Diástole", 
        text: "El corazón tiene un ritmo que la razón no entiende. Hoy toca cardio, pero del que se siente en la pista. Dale 'play' a esa canción que te hace mover los pies sin pensar. El movimiento es medicina.",
        img: "/assets/img/flor4.png"
    },
    26: { 
        title: "Día V: El Gambito de la Reina", 
        text: "En el tablero, como en la vida, cada movimiento cuenta. Estás aprendiendo rápido y ya manejas las blancas con elegancia. El reto de hoy: ¿Cómo harías jaque en tres movimientos con tu pieza favorita? El premio es un detalle que te espera en el mundo real.",
        img: "/assets/img/flor5.png"
    },
    27: { 
        title: "Día VI: Anatomía del Recuerdo", 
        text: "Armar un rompecabezas es como reconstruir la memoria. Cada pieza encaja solo cuando es el momento justo. Mira la foto que te enviaré hoy; es una pieza fundamental de lo que hemos construido juntos. Solo falta una para completar el cuadro.",
        img: "/assets/img/flor6.png"
    },
    28: { 
        title: "Día VII: La Historia Completa", 
        text: "Capítulo Final: 19 años. No son solo latidos, es la banda sonora de tu propia historia. Has llegado al 28 de enero. Hoy no hay prescripciones, solo una celebración de que existes. Tu regalo principal te espera donde guardas tus libros favoritos. ¡Feliz cumpleaños!",
        img: "/assets/img/flor7.png"
    }
};

export function initCalendar() {
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth(); // 0 es Enero
    const cards = document.querySelectorAll('.day-card');

    cards.forEach(card => {
        const day = parseInt(card.getAttribute('data-day'));

        // Lógica de desbloqueo (Enero es mes 0)
        if (currentMonth === 0 && currentDay >= day) {
            card.classList.remove('locked');
            
            // Llamamos a la función para que el ramo aparezca si el día ya pasó
            addFlowerToBouquet(day); 

            card.addEventListener('click', () => {
                showModal(daysContent[day]);
            });
        }
    });

    setupModal(); // Solo se llama una vez para configurar los eventos de cierre
}

function showModal(content) {
    const modal = document.getElementById('content-modal');
    const modalBody = document.getElementById('modal-body');
    
    // Generamos el HTML dinámico dentro del modal
    let html = `
        <h2 class="vintage-title">${content.title}</h2>
        <img src="${content.img}" class="modal-flower-illustration" alt="Ilustración botánica">
        <div class="divider"></div>
        <p class="body-text">${content.text}</p>
    `;

    // Botón especial para el día del baile
    if (content.title.includes("Sístole")) {
        html += `<button class="button-classic" onclick="window.open('URL_DE_TU_CANCION')">Escuchar Ritmo</button>`;
    }

    // Imagen especial para el reto de ajedrez
    if (content.title.includes("Gambito")) {
        html += `<img src="/assets/img/tablero-ajedrez.png" class="modal-img" alt="Reto de ajedrez">`;
    }

    modalBody.innerHTML = html;
    modal.classList.add('is-open');
}

function setupModal() {
    const modal = document.getElementById('content-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    // El botón de cerrar quita la clase 'is-open'
    closeBtn?.addEventListener('click', () => {
        modal.classList.remove('is-open');
    });

    // Cerrar al hacer clic en el fondo oscuro
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('is-open');
        }
    });
}

function addFlowerToBouquet(day) {
    const vase = document.getElementById('vase');
    if (!vase) return; // Seguridad por si el elemento no existe

    // Evitamos duplicar flores si ya están en el jarrón
    if (!document.querySelector(`.flower-${day}`)) {
        const flowerImg = document.createElement('img');
        flowerImg.className = `flower flower-${day}`;
        flowerImg.src = daysContent[day].img;
        flowerImg.alt = `Flor del día ${day}`;
        vase.appendChild(flowerImg);
    }
}