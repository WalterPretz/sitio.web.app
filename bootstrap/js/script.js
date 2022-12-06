var myCarousel = document.querySelector('#miCarusel')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: true
});

myFunction();

function myFunction() {
    var x = window.matchMedia("(max-width: 767px)");
    if (x.matches) { // If media query matches
        document.getElementById('barra').classList.remove("fixed-top");
    } else {
        document.getElementById('barra').classList.remove("fixed-top");
    }
}
