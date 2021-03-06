import getTemplate from './template';
export class sharingBtns {
	constructor(selector, options) {
		let defaultOptions = {
			socials: 'vk, reddit',
			position: 'horizontal',
			fixed: false
		}
		this.options = Object.assign(defaultOptions, options)
		this.$el = document.querySelector(selector)
		if (this.$el) {
			this.#render(this.options);
			this.#buttonsClick();
		} else {
			console.error('sharing-btns is not defined in markup!');
		}
	}

	#render(props) {
		this.$el.classList.add('sharing-btns');
		this.$el.innerHTML = getTemplate(props);
		const { fixed } = props;
		if (fixed) {
			this.$el.classList.add('fixed');
		}
	}

	#buttonsClick = () => {
		const items = this.$el.querySelectorAll('[data-social]');
		items.forEach(el => {
			el.addEventListener('click', (e) => {
				const data = e.target.dataset.social;
				this.#cases(data);
			})
		});
	}

	#cases = (data) => {
		const currentUrl = window.location.href;
		const currentTitle = document.title;
		let currentDescription = document.querySelector('meta[name="description"]');
		currentDescription = currentDescription.getAttribute('content');
		let url = ''
		switch (data) {
			case 'vk':
				url = `https://vk.com/share.php?url=${currentUrl}&title=${encodeURIComponent(currentTitle)}&description=${encodeURIComponent(currentDescription)}`;
				this.#showPopup(url);
				break;

			case 'twitter':
				url = `https://twitter.com/share?url=${currentUrl}&title=${encodeURIComponent(currentTitle)}&description=${encodeURIComponent(currentDescription)}`;
				this.#showPopup(url);
				break;
			case 'facebook':
				url = `https://www.facebook.com/sharer.php?s=100?url=${currentUrl}&title=${encodeURIComponent(currentTitle)}&description=${encodeURIComponent(currentDescription)}`;
				this.#showPopup(url);
				break;
			case 'reddit':
				url = `https://www.reddit.com/submit?url=${currentUrl}&title=${encodeURIComponent(currentTitle)}&description=${encodeURIComponent(currentDescription)}`;
				this.#showPopup(url);
				break;

		}
	}

	#showPopup = (url) => {
		window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
	}
}