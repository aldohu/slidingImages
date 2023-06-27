const body = document.body;
const slides = document.querySelectorAll('.slide');
const sliderContainer = document.querySelector('.slide-container');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
let activeSlide = 0;
body.style.backgroundImage = slides[0].style.backgroundImage;
leftBtn.addEventListener('click', () => {
	if (activeSlide > 0) {
		activeSlide--;
	} else {
		activeSlide = slides.length - 1;
	}
	setBgToBody();
	setActiveSlide();
	setSliderContainer();
});

rightBtn.addEventListener('click', () => {
	if (activeSlide < slides.length - 1) {
		activeSlide++;
	} else {
		activeSlide = 0;
	}
	setBgToBody();
	setActiveSlide();
	setSliderContainer();
});
const setBgToBody = () => {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};
const setActiveSlide = () => {
	slides.forEach((slide) => {
		slide.classList.remove('active');
	});
	slides[activeSlide].classList.add('active');
};
const setSliderContainer = () => {
	sliderContainer.style.transform = `translateX(-${activeSlide * 100}%)`;
};
