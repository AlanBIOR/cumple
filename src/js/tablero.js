// src/js/tablero.js
export function initGhostBoard() {
    const board = document.getElementById('ghost-board');
    if (!board) return;

    const squareSize = 80;
    const cols = Math.ceil(window.innerWidth / squareSize);
    const rows = Math.ceil(document.body.scrollHeight / squareSize);
    const totalSquares = cols * rows;
    const squares = [];

    // Crear las casillas (tu lógica original)
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('board-square');
        const row = Math.floor(i / cols);
        if ((row + i) % 2 === 0) {
            square.classList.add('square-dark');
        }
        board.appendChild(square);
        squares.push(square);
    }

    // --- FUNCIÓN UNIFICADA DE ACTUALIZACIÓN ---
    const updateCheckmateEffect = (pageX, pageY) => {
        squares.forEach(square => {
            const rect = square.getBoundingClientRect();
            const squareX = rect.left + window.scrollX + (squareSize / 2);
            const squareY = rect.top + window.scrollY + (squareSize / 2);

            const distance = Math.sqrt(
                Math.pow(pageX - squareX, 2) + Math.pow(pageY - squareY, 2)
            );

            if (distance < 120) {
                square.classList.add('is-active');
            } else {
                square.classList.remove('is-active');
            }
        });
    };

    // 1. Evento para Mouse
    document.addEventListener('mousemove', (e) => {
        updateCheckmateEffect(e.pageX, e.pageY);
    });

    // 2. Evento para Móviles (Touch)
    document.addEventListener('touchmove', (e) => {
        // e.touches[0] es el primer dedo que toca la pantalla
        const touch = e.touches[0];
        updateCheckmateEffect(touch.pageX, touch.pageY);
    }, { passive: true }); // passive: true mejora el rendimiento del scroll

    // 3. Limpiar cuando se deja de tocar (opcional, para que no quede prendido)
    document.addEventListener('touchend', () => {
        squares.forEach(s => s.classList.remove('is-active'));
    });
}