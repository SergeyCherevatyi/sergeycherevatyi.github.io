$(document).ready(function(){
	$('.carousel__inner').slick({
		// autoplay:true,
		// autoplaySpeed:4000,
		arrows:true,
		prevArrow: '<button type="button" class="prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="next"><img src="icons/right.svg"></button>',
		adaptiveHeight: true,
		responsive: [
			{
			breakpoint: 991,
			settings: {
				arrows: false,
				dots: true,
				}
			}
		  ]
	});

  });