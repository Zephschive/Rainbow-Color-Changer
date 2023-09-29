const rainbowBackground = document.querySelector('.rainbow-background');
const speedRange = document.getElementById('speedRange');
const speedValue = document.getElementById('speedValue');

function updateAnimationSpeed() {
    const speed = speedRange.value;
    rainbowBackground.style.animationDuration = `${speed * 2}s`;

}

speedRange.addEventListener('input', updateAnimationSpeed);
updateAnimationSpeed(); // Set initial animation speed and Update Speed

