const swiper = new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clicable: true,
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	slidesPerView: 1,
	spaceBetween: 30,
	centeredSlides: true,
	initialSlide: 1,
	loop: true,
	freeMode: false,
	speed: 500,
	effect: 'slide',
	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: true,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	zoom: {
		maxRatio: 3,
		minRatio: 1,
	},
}
);

