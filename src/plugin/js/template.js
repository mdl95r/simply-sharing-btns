const getTemplate = ({ socials, position }) => {
	const items = socials.split(', ').map(el => {
		return `
				<div class="sharing-btns-item ${el}" data-social="${el}" title="Share in ${el}"></div>
				`
	});
	return `
			<div data-position="${position}">
				${items.join('')}
			</div>
			`
}

export default getTemplate