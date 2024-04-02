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


const heart = document.getElementById('cardLike')
let isFilled = false; // Изначально не закрашено


heart.addEventListener('click', function () {
	if (isFilled) {
		// Если уже закрашено, возвращаем обратно в белый цвет
		heart.setAttribute('fill', '#FFFFFF')
		isFilled = false
	} else {
		// Иначе закрашиваем в красный
		heart.setAttribute('fill', '#F7931E')
		isFilled = true
	}
})