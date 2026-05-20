let index = 0;

const slides = document.getElementById("slides");
const cards = document.querySelectorAll(".card");

const visibleCards = 3;

function showSlide() {
    const cardWidth = cards[0].offsetWidth + 10;
    slides.style.transform =
        `translateX(-${index * cardWidth}px)`;
}

function nextSlide() {

    const maxIndex = cards.length - visibleCards;

    if (index < maxIndex) {
        index++;
    } else {
        index = 0;
    }

    showSlide();
}

function prevSlide() {

    const maxIndex = cards.length - visibleCards;

    if (index > 0) {
        index--;
    } else {
        index = maxIndex;
    }

    showSlide();
}