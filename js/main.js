var movingProfile = document.getElementById('profile');

// checks if the user is on mobile device
function isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /iphone|ipod|ipad|android|blackberry|windows phone/.test(userAgent) || window.innerWidth <= 768;
}

if (!isMobileDevice() && movingProfile) {
    window.addEventListener('scroll', function() {

        if (window.scrollY >= 530) {
            movingProfile.style.transform = "translateY(260px)";
        } else {
            movingProfile.style.transform = "translateY(0)";
        }
    });
}


// slide mover starts here
var slideIndex = 1;
var slideInterval;

function showSlides(n) {
    var slides = document.getElementsByClassName("slide");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
    resetAutoSlide();
}

function resetAutoSlide() {
    clearInterval(slideInterval); // stop previous interval
    slideInterval = setInterval(function () {
        slideIndex++;
        showSlides(slideIndex);
    }, 3500);
}

showSlides(slideIndex);
resetAutoSlide();


// modal

    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('modalOverlay');

    openBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Close modal when clicking outside content
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
