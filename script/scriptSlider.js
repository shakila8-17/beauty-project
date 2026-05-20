$(document).ready(function(){
  let slides = $('.slider-wrapper .slide');
  let dotsContainer = $('.slider-wrapper .dots');
  let current = 0;
  let total = slides.length;
  let autoSlide = setInterval(nextSlide, 5000);
  let startX = 0, endX = 0;

  // Generate dots
  for (let i = 0; i < total; i++) {
    dotsContainer.append('<span' + (i === 0 ? ' class="active"' : '') + '></span>');
  }
  let dots = $('.slider-wrapper .dots span');

  function showSlide(index) {
    slides.removeClass('active').eq(index).addClass('active');
    dots.removeClass('active').eq(index).addClass('active');
    current = index;
  }

  function nextSlide() {
    let next = (current + 1) % total;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (current - 1 + total) % total;
    showSlide(prev);
  }

  $('.slider-wrapper .next').click(function(){
    clearInterval(autoSlide);
    nextSlide();
    autoSlide = setInterval(nextSlide, 5000);
  });

  $('.slider-wrapper .prev').click(function(){
    clearInterval(autoSlide);
    prevSlide();
    autoSlide = setInterval(nextSlide, 5000);
  });

  dots.click(function(){
    clearInterval(autoSlide);
    let index = $(this).index();
    showSlide(index);
    autoSlide = setInterval(nextSlide, 8000);
  });

  // Touch/Swipe support
  $('.slider-wrapper').on('touchstart', function(e){
    startX = e.originalEvent.touches[0].clientX;
  });

  $('.slider-wrapper').on('touchend', function(e){
    endX = e.originalEvent.changedTouches[0].clientX;
    if (startX - endX > 50) { // Swipe Left
      nextSlide();
    } else if (endX - startX > 50) { // Swipe Right
      prevSlide();
    }
  });
});
