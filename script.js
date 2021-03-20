const Modal = {
	open(imagem) {
		document.querySelector('.modal')
			.classList
			.add('active')
		let img = document.querySelector('.imagem-modal')
		img.src = imagem.src.replace('small', 'big')

	},
	close() {
		document.querySelector('.modal')
			.classList
			.remove('active')
		let img = document.querySelector('.imagem-modal')
		img.src = "#"
	}
}