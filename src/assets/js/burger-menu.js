// const button = document.querySelector('.burgerButton')
// const block = document.querySelector('.block')

// button.addEventListener('click', function() {
//    block.classList.toggle('active')
// })

const menuIcon = document.querySelector('.header__menu-icon');
const headerMenu = document.querySelector('.header__menu');
   if (menuIcon) {      
      menuIcon.addEventListener("click", function(){
         document.body.classList.toggle('_lock');
         menuIcon.classList.toggle('_active');
         headerMenu.classList.toggle('_active');
      });
   }

// прокрутка при клике на пункт меню
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset 
         
			if (menuIcon.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				menuIcon.classList.remove('_active');
				headerMenu.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}