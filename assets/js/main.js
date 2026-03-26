// main.js

// Simulated Map Animation
const mapContainer = document.getElementById('mapContainer');
const pin = document.createElement('div');
pin.classList.add('pin');
mapContainer.appendChild(pin);

function animatePin(start, end, duration) {
    const frameRate = 60;
    const totalFrames = duration / (1000 / frameRate);

    let currentFrame = 0;
    const pinPosition = { x: start.x, y: start.y };

    const id = setInterval(() => {
        if (currentFrame >= totalFrames) {
            clearInterval(id);
            return;
        }
        pinPosition.x += (end.x - start.x) / totalFrames;
        pinPosition.y += (end.y - start.y) / totalFrames;
        pin.style.transform = `translate(${pinPosition.x}px, ${pinPosition.y}px)`;
        currentFrame++;
    }, 1000 / frameRate);
}

// Start Animation
animatePin({x: 100, y: 100}, {x: 500, y: 300}, 3000);