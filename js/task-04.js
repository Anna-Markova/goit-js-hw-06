
let counterValue = 0

const displayCounter = document.querySelector('#value')
const btnMinus = document.querySelector('button[data-action="decrement"]')
const btnPlus = document.querySelector('button[data-action="increment"]')

btnMinus.addEventListener('click', () => {
	counterValue--
	displayCounter.textContent = counterValue
})

btnPlus.addEventListener('click', () => {
	counterValue++
	displayCounter.textContent = counterValue
})