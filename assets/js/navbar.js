var nav_hidden = false;
var monochrome = false;
var transparency = false;

function setScrollHandler(bricks) {
	$(window).scroll(brickHandler);
	brickHandler();
}

function scrollCore() {
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
	return scroll;
}

function brickHandler() {
	let scroll = scrollCore();
	
	let brick_bottom = $("#post-splash").offset().top + $("#post-splash").outerHeight(true);
	if (transparency && scroll > brick_bottom) {
		toggleTransparencyOff();
	} else if (!transparency && scroll < brick_bottom) {
		toggleTransparencyOn();
	}
}

function toggleTransparencyOff() {
	$("nav").css("background", "#111");
	transparency = false;
}

function toggleTransparencyOn() {
	$("nav").css("background", "transparent");
	transparency = true;
}
