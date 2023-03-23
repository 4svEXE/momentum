const qs = (el) => document.querySelector(el)
const qsa = (el) => { return document.querySelectorAll(el)}
const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))

qs('body').insertAdjacentHTML('beforeend', `<div class="scripts"></div>`)
const include = src =>{
	const sript = document.createElement('script')
	sript.src = src
	qs('.scripts').appendChild(sript)
}
include('js/main.js')

function dubbleToggle(el, clName, time = 500){
	qs(el).classList.toggle(clName)
	setTimeout(() => { qs(el).classList.toggle(clName)}, time);
}