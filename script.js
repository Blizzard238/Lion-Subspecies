// show te "back to top" button wen scrolled down
window.onscroll = function() {
    const topButton =
document.getElementById("backToTop");
    if (document.body.scrollTop >200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

//scroll to the top when "back to top" button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        /* behavior: 'smooth' */
    });
}