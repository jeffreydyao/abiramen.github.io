$("#landing-splash").mousemove(function() {
	$(this).css("animation-play-state", "running");
	setTimeout(function() {
		$(this).css("animation-play-state", "paused");
	}, 200);
});