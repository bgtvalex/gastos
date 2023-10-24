function acc () {
	const items = document.querySelectorAll('.acc__item')

	items.forEach(item => {
		item.addEventListener('click',() => {
			item.classList.toggle('active')
		})
	})
}

export default acc