const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.carousel-dot');
const prev = document.querySelector('.arrow.prev');
const next = document.querySelector('.arrow.next');

let interval = 3000;
let index = 0;
const imageWidth = images[0].clientWidth;

function updateCarousel() {
	track.style.transform = `translateX(-${index * imageWidth}px)`;
	dots.forEach(dot => dot.classList.remove('active'));
	dots[index].classList.add('active');
}

function showNext() {
	index = (index + 1) % images.length;
	updateCarousel();
}

function showPrev() {
	index = (index - 1 + images.length) % images.length;
	updateCarousel();
}

next.addEventListener('click', () => {
	clearInterval(autoSlide);
	showNext();
});

prev.addEventListener('click', () => {
	clearInterval(autoSlide);
	showPrev();
});

dots.forEach(dot => {
	dot.addEventListener('click', () => {
		clearInterval(autoSlide);
		index = +dot.dataset.index;
		updateCarousel();
	});
});

autoSlide = setInterval(showNext, interval);

// Swipe support
let startX = 0;
const carousel = document.getElementById('carousel');

carousel.addEventListener('touchstart', e => {
	startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', e => {
	const endX = e.changedTouches[0].clientX;
	const deltaX = endX - startX;

	if (deltaX > 50) {
		clearInterval(autoSlide);
		showPrev();
	} else if (deltaX < -50) {
		clearInterval(autoSlide);
		showNext();
	}
});

window.addEventListener('resize', () => {
	updateCarousel(); // Recalculate on resize
});


const lang = new URLSearchParams(window.location.search).get('lang') || 'en';

document.querySelectorAll('.en').forEach(el => el.style.display = lang === 'en' ? 'block' : 'none');
document.querySelectorAll('.ko').forEach(el => el.style.display = lang === 'ko' ? 'block' : 'none');