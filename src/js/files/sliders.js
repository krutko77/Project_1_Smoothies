
import Swiper, { Navigation } from 'swiper';
import "../../scss/base/swiper.scss";

// Инициализация слайдера
function initSliders() {
	
	if (document.querySelector('.swiper')) { 
		new Swiper('.swiper', { 
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
         grabCursor: true,
         centeredSlides: true,
         slidesOffsetBefore: 1200,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',            
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
}

// Запуск инициализации слайдера
window.addEventListener("load", function (e) {
	initSliders();	
});