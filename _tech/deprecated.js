// Scroll Slider 2

	$("body").append('<div class="slider"><div></div></div>');
	section_var = $("body > section").length;
	current_section = 0;
	slider_height = $(window).height() / $(document).height();
	$(".slider > div").css({ height: ($(window).height() - 64) * slider_height, top: $(window).scrollTop() * slider_height });
	$(".slider").on("click", function(event) {
		scroll_perc = (event.pageY - 64 - $(window).scrollTop()) / $(this).height();
		$("html").animate({ scrollTop: $(document).height() * scroll_perc }, 350, bezier);
	console(scroll_perc);
	});
	for (i=0;i<section_var;i++) {
		if ($("body > section").eq(i).position().top <= $(window).scrollTop()) {
			$("body > section").eq(i).addClass("current");
			if (i !== 0) {
				$("body > section").eq(i-1).removeClass("current");
				current_section++;
			}			
		}
		$(".slider").append('<div><div></div></div>');
	}

		// Scroll Slider 2 sliding	
	$(".slider > div").on("mousedown", function() {
		slider_var = $(this).index();
		$("html").animate({ scrollTop: $("body > section").eq(slider_var).position().top - 64 }, 350, bezier );
	});
	$(window).on("scroll", function() {
		// Current Section engine
		if (current_section < section_var - 1 && $("body > section").eq(current_section+1).position().top <= $(window).scrollTop() + 64) {
			$("body > section").eq(current_section).removeClass("current");
			current_section++;
			$("body > section").eq(current_section).addClass("current");
		}
		if (current_section !== 0 && $("body > section").eq(current_section-1).position().top + $("body > section").eq(current_section-1).outerHeight() > $(window).scrollTop()) {
			$("body > section").eq(current_section).removeClass("current");
			current_section--;
			$("body > section").eq(current_section).addClass("current");
		}

		// Scroll Slider 2 calculations
		if (current_section == 0) section_start = $("body > section").eq(current_section).position().top;
		else section_start = $("body > section").eq(current_section).position().top - 64;
		
		if (current_section == section_var - 1) section_end = section_start + $("body > section").eq(current_section).outerHeight() - $(window).height() + 64;
		else section_end = section_start + $("body > section").eq(current_section).outerHeight();
		
		section_height = section_end - section_start;
		section_progress = $(window).scrollTop() - section_start;
		
		if (section_progress / section_height <= 1) section_perc = section_progress / section_height * 100;
		else section_perc = 100;

		// Scroll Slider 2 engine
		$(".slider > div").eq(current_section).prevAll().removeClass().addClass("slider-before");
		$(".slider > div").eq(current_section).removeClass().addClass("slider-now");
		$(".slider > div").eq(current_section).nextAll().removeClass().addClass("slider-after");
		$(".slider > div").eq(current_section).children("div").css({ height: section_perc + '%' });
		$(".slider > div:not(.slider-now)").children("div").css({ height: 0 });
	});




// Old light theme
	// prepend
	if (theme == '') {
		if ((time.getHours() == 20 && time.getMinutes() >= 30) || time.getHours() > 20 || time.getHours() < 6 || (time.getHours() == 6 && time.getMinutes() <= 30)) theme = 'dark';
		else theme = 'light';
	}

	// append
	$("#theme").on("click", function(){
		$("body").removeClass(theme);
		time_theme = new Date();
		expires_theme = time_theme;
		document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		if (theme == 'light') {
			theme = 'dark';
			if ((time_theme.getHours() > 6 || (time_theme.getHours() == 6 && time_theme.getMinutes() >= 30)) && (time_theme.getHours() < 20 || (time_theme.getHours() == 20 && time_theme.getMinutes() < 30))) {
				// if h:m >= 6:30 & < 20:30 -> motyw ciemny zostaje do 6:30 następnego dnia
				expires_theme.setDate(expires_theme.getDate()+1); expires_theme.setHours(6); expires_theme.setMinutes(30); expires_theme.setSeconds(0);
				document.cookie = "theme=dark; expires=" + expires_theme.toUTCString() + "; path=/";
			}
		}
		else if (theme == 'dark') {
			theme = 'light';
			if ((time_theme.getHours() > 20 || (time_theme.getHours() == 20 && time_theme.getMinutes() >= 30)) && time_theme.getHours() <= 23) {
				// if h:m >= 20:30 & < 0:00 -> motyw jasny zostaje do 20:30 następnego dnia
				expires_theme.setDate(expires_theme.getDate()+1); expires_theme.setHours(20); expires_theme.setMinutes(30); expires_theme.setSeconds(0);
				document.cookie = "theme=light; expires=" + expires_theme.toUTCString() + "; path=/";
			}
			else if ((time_theme.getHours() < 6 || (time_theme.getHours() == 6 && time_theme.getMinutes() <= 30)) && time_theme.getHours() >= 0) {
				// if h:m >= 0:00 & < 6:30 -> motyw jasny zostaje do 20:30
				expires_theme.setHours(20); expires_theme.setMinutes(30); expires_theme.setSeconds(0);
				document.cookie = "theme=light; expires=" + expires_theme.toUTCString() + "; path=/";
			}
		}
		$("body").addClass(theme);



// MouseOnCard
	$("#cards > *").on("mouseenter", function() {
		if ($(".opened").length < 1) {		
			$(this).addClass("highlighted");
			$("#cards > *").not(".highlighted").addClass("not-highlighted");
			$(".highlighted").on("mouseleave", function() {
				if ($(".opened").length < 1) {
					$("#cards > .not-highlighted").removeClass("not-highlighted");
					$(this).removeClass("highlighted");
				}
			});
		}
	});
