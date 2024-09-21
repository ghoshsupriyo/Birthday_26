function showConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiColors = ['#ff4081', '#00e676', '#ffeb3b', '#00b0ff'];
    const confettiPieces = Array.from({ length: 150 }, () => createConfettiPiece());

    function createConfettiPiece() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 7 + 3,
            speed: Math.random() * 3 + 1,
            color: confettiColors[Math.floor(Math.random() * confettiColors.length)]
        };
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confettiPieces.forEach(piece => {
            ctx.fillStyle = piece.color;
            ctx.fillRect(piece.x, piece.y, piece.size, piece.size);

            piece.y += piece.speed;
            if (piece.y > canvas.height) {
                piece.y = -piece.size;
            }
        });

        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
}
