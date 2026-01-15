export function initChapterUnlock() {
    // 1. LIMPIEZA AUTOMÁTICA (Para que siempre salga al recargar)
    localStorage.clear(); 

    const modal = document.getElementById('unlock-modal');
    const closeBtn = document.querySelector('.close-modal-btn');
    const chapters = document.querySelectorAll('.chapter-node');

    if (!modal || !closeBtn) return;

    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth(); // 0 = Enero

    chapters.forEach((chapter, index) => {
        // dayToUnlock será 15, 16, 17... (para tus pruebas de hoy)
        const dayToUnlock = 22 + index; 
        const onclickAttr = chapter.getAttribute('onclick');
        if (!onclickAttr) return;

        const urlMatch = onclickAttr.match(/['"](.*?)['"]/);
        const chapterUrl = urlMatch ? urlMatch[1] : "#";
        const chapterTitle = chapter.querySelector('.node-title')?.innerText || "este capítulo";

        chapter.removeAttribute('onclick');

        const isPast = (currentMonth === 0 && currentDay > dayToUnlock) || currentMonth > 0;
        const isToday = (currentMonth === 0 && currentDay === dayToUnlock);

        if (isPast || isToday) {
            chapter.classList.add('is-unlocked');
            chapter.classList.remove('is-locked');
            
            chapter.addEventListener('click', () => {
                // Gracias al localStorage.clear() de arriba, esto siempre entrará aquí si es el día actual
                if (isToday && !localStorage.getItem(`opened_cap_${dayToUnlock}`)) {
                    handleFirstUnlock(dayToUnlock, chapterTitle, chapterUrl);
                } else {
                    window.location.href = chapterUrl; 
                }
            });
        } else {
            chapter.classList.add('is-locked');
            chapter.classList.remove('is-unlocked');
            
            chapter.addEventListener('click', (e) => {
                e.preventDefault();
                // Resetear botón para capítulos cerrados
                closeBtn.innerText = "Entendido";
                closeBtn.onclick = () => modal.classList.remove('active');

                showPopup(
                    "Ten paciencia...", 
                    `Este capítulo se revelará el ${dayToUnlock} de enero. ¡Ya falta muy poco!`
                );
            });
        }
    });
}

function showPopup(title, text) {
    const modal = document.getElementById('unlock-modal');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-text').innerText = text;
    modal.classList.add('active');
}

function handleFirstUnlock(day, title, url) {
    const modal = document.getElementById('unlock-modal');
    const key = document.querySelector('.modal-key');
    const closeBtn = document.querySelector('.close-modal-btn');
    
    // --- LÓGICA DE MENSAJE PERSONALIZADO ---
    // Calculamos cuánto falta para el 28 de enero
    const birthday = 28;
    const daysLeft = birthday - day;

    let message = "";
    if (daysLeft > 0) {
        message = `Faltan ${daysLeft} días para tu cumpleaños. El capítulo "${title}" se ha abierto para ti. Haz clic en continuar para entrar.`;
    } else {
        message = `¡Hoy es tu cumpleaños! El capítulo final "${title}" se ha abierto para ti. Haz clic en continuar para entrar.`;
    }

    showPopup("¡Desbloqueado!", message);
    
    closeBtn.innerText = "Continuar"; 
    closeBtn.onclick = () => {
        window.location.href = url; 
    };
    
    localStorage.setItem(`opened_cap_${day}`, 'true');
    if (key) key.classList.add('unlock-spin');
}