console.log("Hello there, fellow hackerperson. 🕵️‍♂️🕵️‍♀️")

document.querySelectorAll('.page-anchor-offset').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var dest = document.querySelector(this.getAttribute('href'));
        window.scroll(0, dest.offsetTop - 90);
    });
});
