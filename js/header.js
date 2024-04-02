document.querySelector('.burger').addEventListener('click', function () {
	this.classList.toggle('active')
	document.getElementById('header__menu').classList.toggle('open')
})
