function updateBackground() {
    document.querySelectorAll("nav ul li a").forEach(li => {
        let rect = li.getBoundingClientRect(); // get li position relative to the viewport
        li.style.backgroundPosition = `center ${-window.scrollY}px`; // move position based on scroll
    });
}

// Run when the page loads
window.addEventListener("load", updateBackground);

// Run on scroll
document.addEventListener("scroll", updateBackground);