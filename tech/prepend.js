// Start settings
$(window).on("load", function(){
	
	//Dev mode
	$(".dev").css({ display: 'none' })
	if ($("body").hasClass("developer")) {
		$(".dev").css({ display: '' });
		$("a#dev").css({ display: 'none' });
	}
	
	// Light theme
	time = new Date();
	theme = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	if (theme == '') {
		theme = 'dark';
		$("nav > a#theme").addClass("off");
	}
	else {
		theme = 'light';
		$("nav > a#theme").addClass("on");
	}
	$("body").removeClass("dark");
	$("body").addClass(theme);
	
	$("#cards > *").addClass("closed");
	
	bezier = $.bez([.4,0,.2,1]);


	for (i=0; i<=$("#cards > figure.initiative").length; i++) {
		card_name = $("#cards > figure.initiative").eq(i).find("header > h2").text();
		console.log(card_name);
		//$("#cards > figure > header > span > *").eq(i).appendTo('<p></p>');
<<<<<<< HEAD
		$("#cards > figure.initiative").eq(i).children("header").css({ 'background-image': "url('covers/" + card_name + ".svg')" });
=======
		$("#cards > figure.initiative").eq(i).children("header").css({ 'background-image': "url('_covers/" + card_name + ".svg')" });
>>>>>>> 47d0f87afd8f23b14fbf1b5a4a72608f50ce425b
		$("#cards > figure.initiative").eq(i).children("header").append('<h1>' + card_name + '</h1>');
	}
	$(".conference > header").css({ background: $(".conference").find("h1:first-of-type").css("background-image"), color: $(".conference").find("h1:first-of-type").css("color") });
	
	$(window).on("resize", function() {
		disableTransitions();
	}); 

function disableTransitions() {
	$("#cards > figure:not(.opened)").css({ transition: 'none' }).on("mouseenter", function() { $(this).css({ transition: '' }) });
};


// Polar Web Launcher - Smart Folders 3
	folders_index = $("#launcher > div > div").length;
	for (i=0; i<folders_index; i++) {
		eq_folder = $("#launcher > div > div").eq(i);
		if (eq_folder.children("a").length > 1) {
			eq_folder.addClass("folder");
			eq_folder.children("a").wrapAll('<div class="checker"></div>');
			// find long folder
			if (eq_folder.children(".checker").height() > 32) {
				eq_folder.addClass("long");
				eq_folder_links = eq_folder.children(".checker").children("a");
				for (hidden_link_i=0; hidden_link_i <eq_folder_links.length; hidden_link_i++) if (eq_folder_links.eq(hidden_link_i).position().top >= 32) eq_folder_links.eq(hidden_link_i).addClass("hidden_link");
				eq_folder.children("p").append('<div name-svgkit="svg_expand_more"></div>');	
			}
			// if long folder hasn't got img	
			if (eq_folder.children("img").length == 0)
				eq_folder.prepend('<figure name-svgkit="svg_folder"></figure>');
		}
	}
	// if link hasn't got img	
	links_index = $("#launcher > div > a").length;
	for (i=0; i<links_index; i++) {
		eq_link = $("#launcher > div > a").eq(i);
		if (eq_link.children("img").length == 0) eq_link.prepend('<figure name-svgkit="svg_link"></figure>');
	}
	
	$(window).on("resize", function() {
		for (i=0; i<$("#launcher > div > div.folder").length; i++) {
			eq_folder2 = $("#launcher > div > div.folder").eq(i);
			// now long folder
			if (eq_folder2.children(".checker").height() > 32 && eq_folder2.hasClass("long") == false) {
				eq_folder2.addClass("long");
				eq_folder2.children("p").append('<div name-svgkit="svg_expand_more"></div>'); SVGKit();	
			}
			// not long folder anymore
			else if (eq_folder2.children(".checker").height() <= 32 && eq_folder2.hasClass("long") == true)
				eq_folder2.removeClass("long").find("p > div").remove();
				eq_folder2.children(".checker").children("a").removeClass("hidden_link");
			// changing hidden links
			if (eq_folder2.hasClass("long") == true) {
				eq_folder_links = eq_folder2.children(".checker").children("a");
				for (hidden_link_i=0; hidden_link_i <eq_folder_links.length; hidden_link_i++) if (eq_folder_links.eq(hidden_link_i).position().top >= 32) eq_folder_links.eq(hidden_link_i).addClass("hidden_link");
			}
		}
	});


	$(".long").on("mouseenter", function() {
		$(this).css({ zIndex: 91, height: $(this).children(".checker").height() + 32, marginBottom: -($(this).children(".checker").height() - 32) });	
		$(this).on("mouseleave", function() {
			$(this).css({ zIndex: 90, height: '', marginBottom: '' });
			setTimeout(function() {
				$(this).css({zIndex: ''});
			}, 200);
		});
	});
	//~ $(".long a").on("mouseenter", function () { log($(this).position().top); });


	
//
});
