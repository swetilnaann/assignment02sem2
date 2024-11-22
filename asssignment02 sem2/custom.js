// Scroll effect for moving header
window.onscroll = function() { scrollEffect() };

function scrollEffect() {
    var header = document.querySelector("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("moved");
    } else {
        header.classList.remove("moved");
    }
}
