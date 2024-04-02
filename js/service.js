let collapse = document.querySelectorAll('.collapse')
collapse.forEach(item => {
	item.addEventListener('click', () => {
		item.querySelector('.wrapper').classList.toggle('open')
		item.querySelector('.collapse__content img').classList.toggle('rotate')
		// wrapper.classList.toggle("open")
		// img.classList.toggle("rotate")
	})
})
