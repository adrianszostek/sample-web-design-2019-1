$(window).on("load", function(){
	
// Setting SVGs
	$("#cards > figure.initiative > nav > a.edit").text("Edit").attr("name-svgkit", "svg_edit");

// Return Button
	function return_button() {
		$("body").prepend('<a id="return_button" name-svgkit="svg_back"></a>');
	};
	if ($("body").hasClass("home") == false) return_button();
	
	$("#return_button").on("click", function() {
		window.history.back();
	});


// NavBar (+)
	// Off - On switch (+)
	$("body > header > nav > a").on("click", function() {
		if ($(this).hasClass("off") == true) $(this).toggleClass("on").toggleClass("off");
		else if ($(this).hasClass("on") == true) $(this).toggleClass("on").toggleClass("off");
	});
	
	// Setting 'onclicks'
	//~ $("body > header > nav > a#mobile").on("click", function(){
		//~ $(".mobile").toggle(200);
	//~ });
	//~ dev_val = 0;
	
	/*$("body > header > nav > a#dev").on("click", function(){
		dev_val++
		if (dev_val++ > 0) {
			$(".dev").show().removeClass("card-disappear").addClass("card-appear").css({ transition: 'opacity 200ms var(--easing), box-shadow 300ms var(--easing) 200ms' });
			setTimeout( function() {
				$(".card-appear").css({ transition: 'box-shadow 300ms var(--easing)' });
			}, 500);
			dev_val=-2;
		}
		else {
			$(".dev").addClass("card-disappear").css({ transition: 'opacity 200ms var(--easing) 300ms, box-shadow 300ms var(--easing)' });
			setTimeout( function() {
				$(".card-appear").removeClass(".card-appear").hide();
			}, 500);
		}			
	});*/
	

	// Light theme
	$("#theme").on("click", function(){
		$("body").removeClass(theme);
		time_theme = new Date();
		expires_theme = time_theme;
		document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		if (theme == 'light') theme = 'dark';
		else {
			theme = 'light';
			if ((time_theme.getHours() > 20 || (time_theme.getHours() == 20 && time_theme.getMinutes() >= 30)) && time_theme.getHours() <= 23) {
				// if h:m >= 20:30 & < 0:00 -> motyw jasny zostaje do 20:30 następnego dnia
				expires_theme.setDate(expires_theme.getDate()+1); expires_theme.setHours(20); expires_theme.setMinutes(30); expires_theme.setSeconds(0);
				document.cookie = "theme=light; expires=" + expires_theme.toUTCString() + "; path=/";
			}
			else if ((time_theme.getHours() < 20 || (time_theme.getHours() == 20 && time_theme.getMinutes() < 30)) && time_theme.getHours() >= 0) {
				// if h:m >= 0:00 & < 20:30 -> motyw jasny zostaje do 20:30
				expires_theme.setHours(20); expires_theme.setMinutes(30); expires_theme.setSeconds(0);
				document.cookie = "theme=light; expires=" + expires_theme.toUTCString() + "; path=/";
			}
		}
		$("body").addClass(theme);
	});

// Current Header & Scroll Slider 2 (+)

	// Start settings
	
		// Header automatisation
		for (i=0; i<$("body > header").length; i++)
			$("body > header").eq(i).children("h2:first").wrap('<h2></h2>');
			
	headers_var = $("body > header").length;
	current_header = 0;
	for (i=0;i<headers_var;i++) {
		if ($("body > header").eq(i).position().top <= $(window).scrollTop()) {
			$("body > header").eq(i).addClass("current");
			if (i !== 0) {
				$("body > header").eq(i-1).removeClass("current").insertAfter($("body > section").eq(i-1));
				current_header++;
			}			
		}
	}
	
	$(window).on("scroll", function() {
		// Current Header engine
		if (current_header < headers_var - 1 && $("body > header").eq(current_header+1).position().top <= $(window).scrollTop()) {
			$("body > header").eq(current_header).removeClass("current").insertAfter($("body > section").eq(current_header));
			current_header++;
			$("body > header").eq(current_header).addClass("current");
		}
		if (current_header !== 0 && $("body > header").eq(current_header-1).position().top > $(window).scrollTop()) {
			$("body > header").eq(current_header).removeClass("current").insertBefore($("body > section").eq(current_header));
			current_header--;
			$("body > header").eq(current_header).addClass("current");
		}
	});
	


// Gallery Component 2 (+)
	function gallery_zero() {
		for (i=0;i<gallery_length;i++) {
			gallery_scroll[i] = 1;
		}
	};	
	gallery_length = $(".gallery").length;
	gallery_scroll = [];
	gallery_zero();
	
	// settings
	$(".gallery").after('<div class="control"><a class="prev"><div></div><p></p></a><a class="next"><p></p><div></div></a></div>');
	for (i=0;i<$(".gallery").length;i++) {
		figury = $(".gallery").eq(i).children("figure").length;
		if ($(".gallery").eq(i).hasClass("pictures") == true) {
			for (i2=0;i2<figury;i2++) {
				$(".gallery").eq(i).children().eq(i2).find("h4, p, ul, ol").wrapAll('<div></div>');
				$(".gallery").eq(i).children().eq(i2).find("div").prepend('<a class="pictures_description_button"></a>');
				$(".gallery").eq(i).children().eq(i2).find("a").attr("name-svgkit", "svg_expand_more");
			}
		}
		$(".gallery").eq(i).next().find(".next p").html(figury-1);
		$(".gallery").eq(i).next().find(".next div").attr("name-svgkit", "svg_next");
	}
	$(".control > .prev").find("div").attr("name-svgkit", "svg_last");
	
	// prev button click
	$(".prev").on("click", function() {
		gallery_i = $(this).parent().prev().index(".gallery");
		gallery_scroll[gallery_i]--;
		gallery_size = $(this).parent().prev().children("figure").length;

		// between
		if (gallery_scroll[gallery_i] >= 2) {
			$(this).parent().prev().animate({ scrollLeft: (gallery_scroll[gallery_i]-1)*846 }, 350, bezier );
			// this
			$("p", this).text(gallery_scroll[gallery_i] - 1);
			$("div", this).children().remove();
			$("div", this).attr("name-svgkit", "svg_prev").removeClass("svg_set");
			// next
			$(this).next().find("p").text(gallery_size - gallery_scroll[gallery_i]);
			$(this).next().find("div").children().remove();
			$(this).next().find("div").attr("name-svgkit", "svg_next").removeClass("svg_set");
		}
		// start
		else if (gallery_scroll[gallery_i] == 1) {
			$(this).parent().prev().animate({ scrollLeft: (gallery_scroll[gallery_i]-1)*846 }, 350, bezier );
			// this
			$("p", this).text('');
			$("div", this).children().remove();
			$("div", this).attr("name-svgkit", "svg_last").removeClass("svg_set");
			// next
			$(this).next().find("p").text(gallery_size - gallery_scroll[gallery_i]);
			$(this).next().find("div").children().remove();
			$(this).next().find("div").attr("name-svgkit", "svg_next").removeClass("svg_set");
		}
		// finish
		else {
			gallery_scroll[gallery_i] = gallery_size;
			$(this).parent().prev().animate({ scrollLeft: (gallery_size-1)*846 }, 350, bezier );
			// this
			$("p", this).text(gallery_scroll[gallery_i] - 1);
			$("div", this).children().remove();
			$("div", this).attr("name-svgkit", "svg_prev").removeClass("svg_set");
			// next
			$(this).next().find("p").text('');
			$(this).next().find("div").children().remove();
			$(this).next().find("div").attr("name-svgkit", "svg_first").removeClass("svg_set");
		}
		SVGKit();
		pictures_description_close();
	});
	
	// next button click
	$(".next").on("click", function() {
		gallery_i = $(this).parent().prev().index(".gallery");
		gallery_scroll[gallery_i]++;
		gallery_size = $(this).parent().prev().children("figure").length;

		// finish
		if (gallery_scroll[gallery_i] == gallery_size) {
			$(this).parent().prev().animate({ scrollLeft: (gallery_scroll[gallery_i]-1)*846 }, 350, bezier );
			// prev
			$(this).prev().find("p").text(gallery_scroll[gallery_i] - 1);
			$(this).prev().find("div").children().remove();
			$(this).prev().find("div").attr("name-svgkit", "svg_prev").removeClass("svg_set");
			// this
			$("p", this).text('');
			$("div", this).children().remove();
			$("div", this).attr("name-svgkit", "svg_first").removeClass("svg_set");
		}
		// between
		else if (gallery_scroll[gallery_i] < gallery_size) {
			$(this).parent().prev().animate({ scrollLeft: (gallery_scroll[gallery_i]-1)*846 }, 350, bezier );
			// prev
			$(this).prev().find("p").text(gallery_scroll[gallery_i] - 1);
			$(this).prev().find("div").children().remove();
			$(this).prev().find("div").attr("name-svgkit", "svg_prev").removeClass("svg_set");
			// this
			$("p", this).text(gallery_size - gallery_scroll[gallery_i]);
			$("div", this).children().remove();
			$("div", this).attr("name-svgkit", "svg_next").removeClass("svg_set");
		}
		// start
		else {
			gallery_scroll[gallery_i] = 1;
			$(this).parent().prev().animate({ scrollLeft: 0 }, 350, bezier );
			// prev
			$(this).prev().find("p").text('');
			$(this).prev().find("div").children().remove();
			$(this).prev().find("div").attr("name-svgkit", "svg_last").removeClass("svg_set");
			// this
			$("p", this).text(gallery_size - gallery_scroll[gallery_i]);
			$("div", this).children().remove();
			$("div", this).attr("name-svgkit", "svg_next").removeClass("svg_set");
		}
		SVGKit();
		pictures_description_close();
	});

	
	$(".pictures_description_button").on("click", function() {
		if ($(this).parent().hasClass("pictures_description") == true) {
			pictures_description_close();
		}
		else {
			$(this).parent().after($(this).parent().clone(true).css({zIndex: -1, height: 'auto', width: '100%', position: 'absolute'}).addClass("pictures_description_div_height"));
			pictures_description_height = $(".pictures_description_div_height").height() + 32;
			if (pictures_description_height <= 70) pictures_description_height=60;
			$(this).addClass("pictures_description_opened").parent().addClass("pictures_description").css({ height: pictures_description_height, marginTop: -pictures_description_height + 60 - 4 });
		}
	});

	function pictures_description_close() {
		$(".pictures_description_div_height").remove();
		$(".pictures_description_opened").removeClass("pictures_description_opened").parent().removeClass("pictures_description").css({ height: '', marginTop: '' });
	};



// Returnable Cards		 // Usunięcie otwartej karty i pozostawienie kopii działa dużo płynniej

	// values settings
	if($(window).width() < 1200 + 48 + 48) semiCardWidth = $(window).width() - 96;
	else semiCardWidth = 1200;
	semiCardHeight = $(window).height() - 64 - 24;
	
	$(window).on("resize", function(){
		if($(window).width() < 1200 + 48 + 48) semiCardWidth = $(window).width() - 96;
		else semiCardWidth = 1200;
		semiCardHeight = $(window).height() - 64 - 24;
	});
	
	// open
	$("figure.closed").on("click", function(){
		
		thisCard = $(this);
		currentHeader = $("header.current");
		currentHeaderTitle = currentHeader.find("h2 > h2");
		var currentHeaderTitleText = currentHeaderTitle.text();
		thisTitle = thisCard.find("header:not(.floating) > h2").text();
			
		if ( $("#cards > figure.opened").length == 0 ) {
					
			// dimensions
			closedCardWidth = $(this).width();
			closedCardHeight = $(this).height();
			thisLeft = $(this).position().left;
			thisTop = $(this).parent().position().top - $(window).scrollTop() + $(this).position().top;
			thisMargins = $(this).css("margin-left").slice(-3,-2);
			semiLeft = $(window).width() / 2 - semiCardWidth / 2 - thisMargins;
			semiTop = 64 - thisMargins + 12;
			maxiLeft = - thisMargins;
			maxiTop = 64 - thisMargins;

			// from
			$(this).after($(this).clone(true).addClass("copy"));
			$(this).addClass("opened").removeClass("closed").css({ left: thisLeft, top: thisTop, width: closedCardWidth /*to correct when small window*/ }).parent().after('<div id="fade"></div>');
			$(this).children("header").clone().addClass("floating").prependTo($(this));
			// to
			if ($(this).hasClass("semi") == true) {	
				$(this).css({ left: semiLeft, top: semiTop, width: semiCardWidth, height: semiCardHeight });
				$(this).children("section, h4").css({ width: semiCardWidth, left: (semiCardWidth - closedCardWidth) / -2 }).animate({ left: '' }, 400, bezier);
			}
			else if ($(this).hasClass("maxi") == true) {
				$(this).css({ left: maxiLeft, top: maxiTop, width: '100vw', height: 'calc(100vh - 64px)' });
			}
			if ($(this).hasClass("unpacked") == false) {
				$(this).children("header").animate({ height: semiCardWidth * 3 / 8 }, 400, bezier);
			}
			
			$(this).children("nav").appendTo(currentHeader);
			currentHeader.children("nav.nav_home").appendTo(".opened"); // swap

			// outside card
			$("body").css({ "overflow-y": "hidden" });
			currentHeader.find("nav, h2 > h2").css({ opacity: 0 });
				
			// opened loaded
			setTimeout( function(){
				thisCard.addClass("opened_loaded");	
				currentHeaderTitle.html(thisTitle);
				if (thisCard.hasClass("unpacked") == true) currentHeaderTitle.css({ opacity: '' }).html("Unpacked"); // niestandardowy thisTitle nieujęty w karcie
				
				currentHeader.children("nav:not(.nav_home)").css({ opacity: '' });
				currentHeaderTitle.css({ opacity: '' })
			}, 200);

			// on resize
			copyCard = $(".copy");
			$(window).on("resize", function() {
				closedCardWidth = copyCard.width();
				closedCardHeight = copyCard.height();
				thisLeft = copyCard.position().left;
				thisTop = copyCard.parent().position().top - $(window).scrollTop() + copyCard.position().top;
				semiLeft = $(window).width() / 2 - semiCardWidth / 2 - thisMargins;
				thisCard.css({ left: semiLeft });
			});
			
			// close
			$("#fade").on("click", close_card);
			$("#card_close").on("click", close_card);

			function close_card() {
				
				// closed_loading
				thisCard.removeClass("opened_loaded").addClass("closed_loading closed");
								
				thisCard.css({ left: thisLeft, top: thisTop, width: closedCardWidth, height: closedCardHeight, overflow: 'hidden' });
				
				if (thisCard.hasClass("semi") == true) {
					thisCard.children("section, h4").animate({ left: (semiCardWidth - closedCardWidth) / -2 }, 400, bezier);				
				}
				if (thisCard.hasClass("unpacked") == false) {
					thisCard.children("header:not(.floating)").animate({ height: closedCardHeight }, 400, bezier);
				}
				
				currentHeader.find("nav, h2 > h2").css({ opacity: 0 });
				$("#fade").css({ animation: "disappear 400ms var(--easing) forwards" });
				gallery_zero();
	

				currentHeader.children("nav").appendTo(thisCard);
				thisCard.find("nav.nav_home").appendTo(currentHeader).css({ opacity: 0 }); // reswap

					// floating header
					if (thisCard.scrollTop() > thisCard.children("header.floating").outerHeight()) {
						thisCard.children("header.floating").css({ "z-index": 52, display: 'block', top: thisCard.scrollTop() - thisCard.children("header.floating").outerHeight() })
						if (thisCard.hasClass("unpacked") == true) thisCard.children("header.floating").animate({ top: thisCard.scrollTop() }, 600, bezier);
						else thisCard.children("header.floating").animate({ height: closedCardHeight, top: thisCard.scrollTop() }, 600, bezier);
					}
					else thisCard.animate({ scrollTop: 0 }, 400, bezier);
				
				// closed
				setTimeout(function(){

					thisCard.removeClass("closed_loading").addClass("closed_loading_2");
					
					currentHeader.find("nav, nav.nav_home, h2 > h2").css({ opacity: '' }); // reswap transition
					currentHeaderTitle.text(currentHeaderTitleText);
				
					setTimeout(function(){
						thisCard.remove();
						$("#fade").remove();
						$(".copy").removeClass("copy");
						$("body").css({ "overflow-y": '' });
					}, 400);
	
				}, 200);

			};
		}
	});


// Nav Switcher	
	for (i=0; i<$("nav.switcher").length; i++) {
		$("nav.switcher").eq(i).children("a:first-of-type").addClass("current");
		$("nav.switcher").eq(i).prev().children("section:not(:first-of-type)").hide();
	}		
	$("nav.switcher > a").on("click", function(event) {
		event.preventDefault();
		$(this).parent().children("a.current").removeClass("current");
		$(this).addClass("current");
		//~ switche = $(this).attr("href");
		//~ switcher = switche.substring(switche.indexOf('#')+1);
		//~ switchers = $(this).parents("header").next("section").children("section");
		var_switcher = $(this).index() - 1;
		switcher_section = $(this).parent().prev();
		switcher_section.children().hide();
		switcher_section.children().eq(var_switcher).css({ display: '' }).show().children().css({ animation: 'appear 200ms var(--easing)' });
		if ( $(this).parent().prev().hasClass("current") == true ) $("html").animate({ scrollTop: (switcher_section.position().top - 64) }, 350, bezier );
		else switcher_section.children().eq(var_switcher).children().css({ animation: 'appear 200ms var(--easing), slide 200ms var(--easing)' });
		//~ for (i=0;i<switchers.length;i++) {
			//~ if (switchers.eq(i).attr("id") !== switcher) switchers.eq(i).hide();
			//~ else switchers.eq(i).css({ display: 'flex', animation: 'appear 200ms var(--easing), slide 200ms var(--easing)' }).show();
		//~ }
        //~ window.location.hash = switche;
	});
	$(window).on("scroll", function() {
		$("body > section.current").next("nav.switcher").addClass("fixed");
		$("body > section:not(.current)").next("nav.switcher").removeClass("fixed");
	});


// SVGKit
	SVGKit();

	
// End of load window
});
	


// SVGKit
function SVGKit() {
	for (i=0;i<$("[name-svgkit]").length;i++) {
		if ($("[name-svgkit]").eq(i).hasClass("svg_set") == false) {
			var svg_var = $("[name-svgkit]").eq(i).attr("name-svgkit");
			$("#SVGKit > svg." + svg_var).clone().prependTo($("[name-svgkit]").eq(i));
			$("[name-svgkit]").eq(i).addClass("svg_set");
		}
	}
}
