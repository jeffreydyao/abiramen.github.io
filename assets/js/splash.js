var nav_hidden = false;
var monochrome = false;
var transparency = false;

$(document).ready(function() {
	scrollHandler();
	console.log("Hello there, fellow hackerperson. 🕵️‍♂️🕵️‍♀️")
});

$(window).scroll(scrollHandler);

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

function scrollHandler() {
	let scroll = $(this).scrollTop();
	let text_top = $("#splash-text").offset().top;
	var text_bottom = text_top + $("#splash-text").outerHeight(true);
	if (nav_hidden && (scroll > text_bottom + 100 || scroll < text_top - 130)) {
		$("#navbar").animate({
			opacity: 1
		}, 150);
		nav_hidden = false;
	} else if (!nav_hidden && scroll > text_top - 130 && scroll < text_bottom + 100) {
		$("#navbar").animate({
			opacity: 0
		}, 150);
		nav_hidden = true;
	}

	let splash_bottom = $("#landing-splash").offset().top + $("#landing-splash").outerHeight(true);

	if (monochrome && scroll > splash_bottom - 50) {
		toggleMonochromeOff();
	} else if (!monochrome && scroll < splash_bottom - 50) {
		toggleMonochromeOn();
	}

	if (transparency && scroll > splash_bottom) {
		toggleTransparencyOff();
	} else if (!transparency && scroll < splash_bottom) {
		toggleTransparencyOn();
	}
}

function toggleMonochromeOff() {
	$("#nav-border").css("background", "#e9e9e9");
	$("nav #nav-right a").css("color", "#e9e9e9");
	$("#logo").attr("src", "assets/images/ramen-logo.png");
	monochrome = false;
}

function toggleMonochromeOn() {
	$("#nav-border").css("background", "rgb(57, 78, 92)");
	$("nav #nav-right a").css("color", "rgb(57, 78, 92)");
	$("#logo").attr("src", "assets/images/ramen-splash.png");
	monochrome = true;
}


function toggleTransparencyOff() {
	$("nav").css("background", "#111");
	transparency = false;
}

function toggleTransparencyOn() {
	$("nav").css("background", "transparent");
	transparency = true;
}