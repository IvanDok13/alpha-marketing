'use strict'

// burger btn

const body = document.querySelector('body')
const burgerBtn = document.querySelector('.header__burger')
const nav = document.querySelector('.header__nav')

const burgerSwitch = () => {
	burgerBtn.classList.toggle('active')
	nav.classList.toggle('active')
	body.classList.toggle('lock')
}

const closeBurger = () => {
	burgerBtn.classList.remove('active')
	nav.classList.remove('active')
	body.classList.remove('lock')
}

if (burgerBtn) {
	burgerBtn.addEventListener('click', burgerSwitch)

	nav.querySelectorAll('.header__link').forEach(link => {
		link.addEventListener('click', closeBurger)
	})
}
