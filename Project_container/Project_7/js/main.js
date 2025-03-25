const hoverArea = document.getElementById('hoverEffect');
const hoverGlow = document.getElementById('hoverGlow');

hoverArea.addEventListener('mousemove', (event) => {
    const rect = hoverArea.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    hoverGlow.style.left = `${x}px`;
    hoverGlow.style.top = `${y}px`;
    hoverGlow.style.opacity = "1";
})

hoverArea.addEventListener("mouseleave", () => {
    hoverGlow.style.opacity = "0";
});