// Interactive mouse pattern
const mousePattern = document.getElementById('mouse-pattern');
const patternDot = document.querySelector('.pattern-dot');
const dots = [];
const maxDots = 50;

mousePattern.addEventListener('mousemove', (e) => {
    const rect = mousePattern.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create new dot
    const dot = document.createElement('div');
    dot.className = 'pattern-dot';
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
    dot.style.opacity = '1';
    mousePattern.appendChild(dot);
    dots.push({
        element: dot,
        createdAt: Date.now()
    });

    // Remove old dots
    if (dots.length > maxDots) {
        const oldDot = dots.shift();
        oldDot.element.remove();
    }
});

// Animate dots
function animateDots() {
    const now = Date.now();
    dots.forEach(dot => {
        const age = now - dot.createdAt;
        const opacity = Math.max(0, 1 - age / 1000);
        dot.element.style.opacity = opacity;
    });
    requestAnimationFrame(animateDots);
}

animateDots();

// Pattern cards interaction
const cards = document.querySelectorAll('.pattern-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// Grid pattern random animation
const gridItems = document.querySelectorAll('.grid-item');

function randomizeGridAnimation() {
    gridItems.forEach(item => {
        const delay = Math.random() * 2;
        const duration = 1 + Math.random();
        item.style.animationDelay = `${delay}s`;
        item.style.animationDuration = `${duration}s`;
    });
}

randomizeGridAnimation();
setInterval(randomizeGridAnimation, 5000);

// Wave pattern dynamic color
const waves = document.querySelectorAll('.wave');
let hue = 0;

function animateWaveColors() {
    hue = (hue + 1) % 360;
    waves.forEach((wave, index) => {
        wave.style.borderColor = `hsl(${(hue + index * 30) % 360}, 70%, 60%)`;
    });
    requestAnimationFrame(animateWaveColors);
}

animateWaveColors();
