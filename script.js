const words = ["Software", "Game", "DevOps", "Network"];
let index = 0;
const textElement = document.querySelector(".changing-text");

function changeText() {
	textElement.style.opacity = 0; // Fade out

	setTimeout(() => {
		index = (index + 1) % words.length;
		textElement.textContent = words[index];
		textElement.style.opacity = 1; // Fade in
	}, 500);
}

// First change after 0.5 seconds
setTimeout(() => {
	changeText();
	setInterval(changeText, 2500); // Then every 2.5 seconds
}, 1000);

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
		}, 50);
	});
});

closeBtn.addEventListener('click', () => {
	modal.style.opacity = '0';
	modal.style.visibility = 'hidden';

	document.body.style.overflow = ''; // restore scroll
	setTimeout(() => {
		embed.src = '';
	}, 250); // wait for fade to complete
});

// Optional: Close modal when clicking outside content
window.addEventListener('click', (e) => {
	if (e.target === modal) {
		closeBtn.click();
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