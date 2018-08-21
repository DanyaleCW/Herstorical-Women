
function gohome() {
    window.location.href = "../main.html"
}

// When the user scrolls down 95px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 95) {
        document.getElementById("footer").style.display = "block";
    } else {
        document.getElementById("footer").style.display = "none";
    }
}
