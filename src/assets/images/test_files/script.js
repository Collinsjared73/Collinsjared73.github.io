$.noConflict();
jQuery(document).ready(function($) {
	
	$("#container").fitVids();
	
	$("a.nav-toggle").click(function(){
		$('ul.mobile-nav').slideToggle(250);
		$(this).toggleClass('active');
	});
	
	$("a.subnav-toggle").click(function(){
		$('.page-subnav').slideToggle(250);
		$(this).toggleClass('active');
	});
	
	$("ul.checklist li").click(function(){
		$(this).toggleClass('checked');
	}); 
	
	$(".top-banner a.close").click(function(){
		$('.top-banner').slideToggle(250);
		$(this).toggleClass('active');
	});
	
	$('a.back-link').bind('click',function(event){
		if ($(window).width() > 1024) {
			
		    var $anchor = $(this);
		    $('html, body').stop().animate({
		        scrollTop: $($anchor.attr('href')).offset().top
		    }, 250, function() {
					$('body').append($('<div></div>').addClass('iosfix'));
					setTimeout(function() {
					  $('.iosfix').remove();
					}, 0);
		    });
		    event.preventDefault();
		    /*
		    if you don't want to use the easing effects:
		    $('html, body').stop().animate({
		        scrollTop: $($anchor.attr('href')).offset().top
		    }, 1000);
		    */
			
		} else {
					    
		    setTimeout(function(){
				$('ul.mobile-nav').slideDown(250);
				$('a.nav-toggle').addClass('active');
			}, 350);
			
		}
	});	
	
	$(window).load( function() {
	
	
		$.fn.eqHeights = function() {
		
		    var el = $(this);
		    if (el.length > 0 && !el.data('eqHeights')) {
		        $(window).bind('resize.eqHeights', function() {
		            el.eqHeights();
		        });
		        el.data('eqHeights', true);
		    }
		    return el.each(function() {
		        var curHighest = 0;
		        $(this).children().each(function() {
		            var el = $(this),
		                elHeight = el.height('auto').height();
		            if (elHeight > curHighest) {
		                curHighest = elHeight;
		            }
		        }).height(curHighest);
		    });
		};
		
		$('.values-wrap, ul.staff-list, ul.events-list').eqHeights();
		
		$('.more-news').eqHeights();
		
		$('.acc-wrap').accordion({
			 active: false,
			 heightStyle: "content",
			 icons: false,
			 collapsible: true,
			 header: "a.question",
			 activate: function( event, ui ) {
				 $('ul.staff-list').eqHeights();
			 }
		});
		
		$(".contact-page .acc-wrap").accordion( "option", { active: 0 } );
				
		$('li#field_1_1 .ginput_container').append('<button class="join">Sign Up</button>');
				
		$("footer .join").click(function() {
			$("#gform_1").trigger("submit",[true]);
		});
		
		jQuery(document).bind('gform_page_loaded', function(){
			$('li#field_1_1 .ginput_container').append('<button class="join">Sign Up</button>');
		});
		
		$(window).scroll(function() {
	    if ($(this).scrollTop() >= 365) {
		    $('.page-template-homepage-2018 header.scroll-nav').addClass('position-fixed');
		    
		} else {
		    $('.page-template-homepage-2018 header.scroll-nav').removeClass('position-fixed');
		}
	});
				
	}); 
	
	var main = $('#main');
	
	var mainTopPosition = main.offset().top + 40;
	
	$(window).scroll(function() {
		if($(window).scrollTop() > mainTopPosition ) {
			$('body').addClass('is-fixed');
		} else {
			$('body').removeClass('is-fixed');
		}
	});
		
});

jQuery(window).resize(function() {
  if (jQuery(window).width() > 1023) {
     jQuery('ul.mobile-nav, .page-subnav').removeAttr('style');
     jQuery('a.nav-toggle, a.subnav-toggle').removeClass('active');
  }
});