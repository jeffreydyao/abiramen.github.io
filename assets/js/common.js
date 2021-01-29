console.log("Hello there, fellow hackerperson. 🕵️‍♂️🕵️‍♀️")

// Pranked, I'm not actually using jQuery.
const $ = document.querySelector.bind(document);

document.querySelectorAll('.page-anchor-offset').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        let nav_height = $('nav').offsetHeight + 5;
        e.preventDefault();
        var dest = document.querySelector(this.getAttribute('href'));
        window.scroll(0, dest.offsetTop - nav_height);
    });
});

$('#hamburger').addEventListener('click', () => {
    $('#overlay').style.height = "100%";
    $('#overlay').style.opacity = "1";
    $('body').style.overflow = "none";
    $('head').style.overflow = "none";
});

$('#overlay-close').addEventListener('click', () => {
    $('#overlay').style.opacity = "0";
    $('body').style.overflow = "auto";
    $('head').style.overflow = "auto";
    setTimeout(() => {$('#overlay').style.height = "0";}, 200);
})
