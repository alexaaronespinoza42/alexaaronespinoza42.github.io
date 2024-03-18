window.onload = function() {
    var banner = document.getElementById('banner');
    var closeBanner = document.getElementById('closeBanner');

    var dayOfWeek = new Date().getDay();

    if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) {
        banner.style.display = 'block'; 
    }

    closeBanner.addEventListener('click', function() {
        banner.style.display = 'none'; 
    });
};
