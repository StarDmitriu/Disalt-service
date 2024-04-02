let slider = document.getElementById('myRange')
let color =
	'linear-gradient(90deg, #FFD700 1%, #FF4500 ' +
	slider.value +
	'%, #E6E6E6 ' +
	slider.value +
	'%)'

slider.style.background = color

slider.oninput = function () {
	color =
		'linear-gradient(90deg, #FFD700 1%, #FF4500 ' +
		this.value +
		'%, #E6E6E6 ' +
		this.value +
		'%)'
	this.style.background = color
}


function showContent(num) {
	let x = document.getElementsByClassName('tabcontent')
	for (let i = 0; i < x.length; i++) {
		x[i].style.display = 'none'
	}
	document.getElementById('content' + num).style.display = 'block'
}

showContent(1)


let collapse = document.querySelectorAll('.collapse')
collapse.forEach(item => {
	item.addEventListener('click', () => {
		item.querySelector('.wrapper').classList.toggle('open')
		item.querySelector('.collapse__content img').classList.toggle('rotate')
		// wrapper.classList.toggle("open")
		// img.classList.toggle("rotate")
	})
})





let screenWidth = window.screen.width // Ширина экрана.
let userScreen = document.body.clientWidth // Ширина окна браузера.
let item1 = document.querySelector('.item1')
let item2 = document.querySelector('.item2')
let item3 = document.querySelector('.item3')
let item4 = document.querySelector('.item4')
let item5 = document.querySelector('.item5')
let item6 = document.querySelector('.item6')
let item7 = document.querySelector('.item7')
let item8 = document.querySelector('.item8')

window.onload = function () {
	item1.classList.add('item-false')
	item2.classList.add('item-false')
	item3.classList.add('item-false')
	item4.classList.add('item-false')
	item5.classList.add('item-false')
	item6.classList.add('item-false')
	item7.classList.add('item-false')
	item8.classList.add('item-false')

	if ((userScreen <= 2560, userScreen != 2240, userScreen > 2240)) {
		item1.classList.add('item-true')
		item2.classList.add('item-true')
		item3.classList.add('item-true')
		item4.classList.add('item-true')
		item5.classList.add('item-true')
		item6.classList.add('item-true')
		item7.classList.add('item-true')
		item8.classList.add('item-true')
		item1.classList.remove('item-false')
		item2.classList.remove('item-false')
		item3.classList.remove('item-false')
		item4.classList.remove('item-false')
		item5.classList.remove('item-false')
		item6.classList.remove('item-false')
		item7.classList.remove('item-false')
		item8.classList.remove('item-false')
	}
	if ((userScreen <= 2240, userScreen != 1920, userScreen > 1920)) {
		item1.classList.add('item-true')
		item2.classList.add('item-true')
		item3.classList.add('item-true')
		item4.classList.add('item-true')
		item5.classList.add('item-true')
		item6.classList.add('item-true')
		item7.classList.add('item-true')
		item1.classList.remove('item-false')
		item2.classList.remove('item-false')
		item3.classList.remove('item-false')
		item4.classList.remove('item-false')
		item5.classList.remove('item-false')
		item6.classList.remove('item-false')
		item7.classList.remove('item-false')
	}
	if ((userScreen <= 1920, userScreen != 1600, userScreen > 1600)) {
		item1.classList.add('item-true')
		item2.classList.add('item-true')
		item3.classList.add('item-true')
		item4.classList.add('item-true')
		item5.classList.add('item-true')
		item6.classList.add('item-true')
		item1.classList.remove('item-false')
		item2.classList.remove('item-false')
		item3.classList.remove('item-false')
		item4.classList.remove('item-false')
		item5.classList.remove('item-false')
		item6.classList.remove('item-false')
	}
	if ((userScreen <= 1600, userScreen != 1280, userScreen > 1280)) {
		item1.classList.add('item-true')
		item2.classList.add('item-true')
		item3.classList.add('item-true')
		item4.classList.add('item-true')
		item5.classList.add('item-true')
		item1.classList.remove('item-false')
		item2.classList.remove('item-false')
		item3.classList.remove('item-false')
		item4.classList.remove('item-false')
		item5.classList.remove('item-false')
	}
	if ((userScreen <= 1280, userScreen != 960, userScreen > 960)) {
		item1.classList.add('item-true')
		item2.classList.add('item-true')
		item3.classList.add('item-true')
		item4.classList.add('item-true')
		item1.classList.remove('item-false')
		item2.classList.remove('item-false')
		item3.classList.remove('item-false')
		item4.classList.remove('item-false')
	}
	if ((userScreen <= 960, userScreen != 640, userScreen > 640)) {
		item1.classList.add('item-true')
		item2.classList.add('item-true')
		item3.classList.add('item-true')
		item1.classList.remove('item-false')
		item2.classList.remove('item-false')
		item3.classList.remove('item-false')
	}
	if ((userScreen <= 640, userScreen != 320, userScreen > 320)) {
		item1.classList.add('item-true')
		item2.classList.add('item-true')
		item1.classList.remove('item-false')
		item2.classList.remove('item-false')
	}
	if (userScreen <= 320) {
		item1.classList.add('item-true')
		item1.classList.remove('item-false')
	}

	console.info('Ширина экрана', screenWidth)
	console.info('Ширина окна браузера', userScreen)
}