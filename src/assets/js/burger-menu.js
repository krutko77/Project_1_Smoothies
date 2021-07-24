const button = document.querySelector('.burgerButton')
const block = document.querySelector('.block')

button.addEventListener('click', function() {
   block.classList.toggle('active')
})

