var movingProfile = document.getElementById('profile');

// checks if the user is on mobile device
function isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /iphone|ipod|ipad|android|blackberry|windows phone/.test(userAgent) || window.innerWidth <= 768;
}

if (!isMobileDevice() && movingProfile) {
    window.addEventListener('scroll', function() {

        if (window.scrollY >= 150) {
            movingProfile.style.transform = "translateY(260px)";
        } else {
            movingProfile.style.transform = "translateY(0)";
        }
    });
}
