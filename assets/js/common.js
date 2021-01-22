console.log("Hello there, fellow hackerperson. 🕵️‍♂️🕵️‍♀️")

$('.page-anchor-offset').click(function (e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({
        scrollTop: $(aid).offset().top - 90
    }, 'fast');
});

$('.page-anchor').click(function (e) {
	e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({
		scrollTop: $(aid).offset().top
    }, 'fast');
});
