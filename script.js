const cards = document.querySelectorAll('.project-card');
const modal = document.getElementById('modal');
const embed = document.getElementById('modal-embed');
const closeBtn = document.getElementById('closeBtn');

cards.forEach(card => {
	card.addEventListener('click', () => {
		const src = card.getAttribute('data-embed') + '?lang=' + currentLang;
		embed.src = src;

		setTimeout(() => {
			modal.style.visibility = 'visible';
			modal.style.opacity = '1';

			document.body.style.overflow = 'hidden'; // disable background scroll
			history.pushState({ modalOpen: true }, '');
		}, 50);
	});
});

function closeModal() {
	modal.style.opacity = '0';
	modal.style.visibility = 'hidden';
	document.body.style.overflow = '';
	setTimeout(() => {
		embed.src = '';
	}, 250);

	// If modal was opened via history, go back to clean up state
	if (history.state && history.state.modalOpen) {
		history.back();
	}
}

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
	if (e.target === modal) {
		closeModal();
	}
});

window.addEventListener('popstate', (e) => {
	if (modal.style.visibility === 'visible') {
		closeModal();
	}
});

let currentLang = "en";

document.getElementById('translate').addEventListener('change', function () {
	const isKorean = this.checked;
	currentLang = isKorean ? "ko" : "en";

	// Show/hide language elements
	document.querySelectorAll('.en').forEach(el => {
		el.style.display = isKorean ? 'none' : 'block';
	});
	document.querySelectorAll('.ko').forEach(el => {
		el.style.display = isKorean ? 'block' : 'none';
	});
});