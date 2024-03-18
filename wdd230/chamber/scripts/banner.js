
function isBannerDay() {
    const today = new Date();
    const day = today.getDay();
    return day >= 1 && day <= 3;
}
function closeBanner() {
    document.getElementById("banner").style.display = "none";
}

window.onload = function() {
    if (isBannerDay()) {
        document.getElementById("banner").style.display = "flex";
    }
};
