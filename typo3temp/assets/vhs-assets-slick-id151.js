
			$(document).ready(function () {
			

			

			$('#slick-id151').slick({
					accessibility: true,
					autoplay: true,
					autoplaySpeed: 5000,
					centerMode: true,
					centerPadding: '',
					cssEase: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
					dots: false,
					dotsClass: 'slick-dots',
					draggable: true,
					edgeFriction: 0.15,
					fade: true,
					mobileFirst: true,
					infinite: true,
					
							initialSlide: 0,
						
					lazyLoad: 'progressive',
					pauseOnHover: true,
					pauseOnDotsHover: true,
					respondTo: 'window',
					speed: 600,
					swipe: true,
					swipeToSlide: false,
					touchMove: true,
					useCSS: true,
					variableWidth: false,
					vertical: false,
					verticalSwiping: false,
					rtl: false,
					waitForAnimate: false,
					zIndex: 1000,
					useTransform: true,
					touchThreshold: 25,
					responsive: [
						{
							breakpoint: 1170,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								rows: 1,
								slidesPerRow: 1,
								arrows: true,
							}
						},
						
						{
							breakpoint: 970,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								rows: 1,
								slidesPerRow: 1,
								arrows: true,
							}
						},
						{
							breakpoint: 750,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								rows: 1,
								slidesPerRow: 1,
								arrows: true,
							}
						},
						{
							breakpoint: 0,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
								rows: 1,
								slidesPerRow: 1,
								arrows: true,
							}
						}
					]
				});
			});
		

