var movingProfile = document.getElementById('profile');


function isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /iphone|ipod|ipad|android|blackberry|windows phone/.test(userAgent) || window.innerWidth <= 768;
}






    if (!isMobileDevice() && movingProfile) {
        window.addEventListener('scroll', function() {
                var s = window.scrollY;
                
                movingProfile.style.transform = `translateY(${s}px)`;
            
        });
    }
