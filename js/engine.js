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



let settingPower = document.getElementById('setting__power-onclick')

function settingPowerF() {
	settingPower.classList.toggle('setting__power-onclickClass')
}

let settingAutomation = document.getElementById('setting__automation-onclick')
function settingPowerF2() {
	settingAutomation.classList.toggle('setting__automation-onclickClass')
}

let settingExecution = document.getElementById('setting__execution-onclick')
function settingPowerF3() {
	settingExecution.classList.toggle('setting__execution-onclickClass')
}

let settingProducer = document.getElementById('setting__producer-onclick')
function settingPowerF4() {
	settingProducer.classList.toggle('setting__producer-onclickClass')
}

const rangeSlider = document.getElementById('range-slider')

if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
		start: [1, 2000],
		connect: true,
		step: 1,
		range: {
			min: [1],
			max: [2000],
		},
	})

	const input0 = document.getElementById('input-0')
	const input1 = document.getElementById('input-1')
	const inputs = [input0, input1]

	rangeSlider.noUiSlider.on('update', function (values, handle) {
		inputs[handle].value = Math.round(values[handle])
	})

	const setRangeSlider = (i, value) => {
		let arr = [null, null]
		arr[i] = value

		rangeSlider.noUiSlider.set(arr)
	}

	inputs.forEach((el, index) => {
		el.addEventListener('change', e => {
			setRangeSlider(index, e.currentTarget.value)
		})
	})
}
