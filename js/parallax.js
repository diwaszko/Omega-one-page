$(document).ready(function() {
	
	var page = $('html, body');
	
	redrawDotNav();
	
    $(window).bind('scroll',function(){
		redrawDotNav();
    });
    
	$('a.home').click(function(e) {
		page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
			page.stop();
		});
		page.animate({ scrollTop: $('#home').position().top }, 1000, function(){
			page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
		});
		return false; 
	});
	$('a.about').click(function(e) {
		page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
			page.stop();
		});
		page.animate({ scrollTop: $('#about').position().top }, 1000, function(){
			page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
		});
		return false; 
	});
	$('a.services').click(function(e) {
		page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
			page.stop();
		});
		page.animate({ scrollTop: $('#services').position().top }, 1000, function(){
			page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
		});
		return false; 
	});
	$('a.photos').click(function(e) {
		page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
			page.stop();
		});
		page.animate({ scrollTop: $('#photos').position().top }, 1000, function(){
			page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
		});
		return false; 
	});
	$('a.contact').click(function(e) {
		page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
			page.stop();
		});
		page.animate({ scrollTop: $('#contact').position().top }, 1000, function(){
			page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
		});
		return false; 
	});
});



function redrawDotNav(){
	var section1Top =  0;

	var section2Top =  $('#about').offset().top - (($('#services').offset().top - $('#about').offset().top) / 16);
	var section3Top =  $('#services').offset().top - (($('#photos').offset().top - $('#services').offset().top) / 0.9);
	var section4Top =  $('#photos').offset().top - (($('#contact').offset().top - $('#photos').offset().top) / 10);
	var section5Top =  $('#contact').offset().top - (($(document).height() - $('#contact').offset().top) / 10);;
	$('#menubar a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('#menubar a.home').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('#menubar a.about').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('#menubar a.services').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('#menubar a.photos').addClass('active');
	} else if ($(document).scrollTop() >= section5Top){
		$('#menubar a.contact').addClass('active');
	}
}



