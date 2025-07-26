// Pickup‐bar rotator
;(function(){
  const messages = [
    'Look for Store Pickup at Checkout',
    'Up to 50% Off Select Styles: Use code SPORT',
    'Members: Free Shipping on Orders $50+'
  ];
  let idx = 0;
  const el = document.getElementById('pickup-text');
  setInterval(() => {
    idx = (idx + 1) % messages.length;
    el.textContent = messages[idx];
  }, 5000);
})();

// Slider logic
;(function(){
  const slides = document.querySelectorAll('.slider .slide');
  const dots   = document.querySelectorAll('.slider .dot');
  const prev   = document.querySelector('.slider .prev');
  const next   = document.querySelector('.slider .next');
  const pause  = document.querySelector('.slider .pause');
  let index = 0, interval, playing = true;

  function goToSlide(n) {
    slides[index].classList.remove('active');
    dots[index].classList.remove('active');
    index = (n + slides.length) % slides.length;
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }
  function nextSlide() { goToSlide(index + 1); }
  function prevSlide() { goToSlide(index - 1); }

  function pausePlay() {
    if (playing) {
      clearInterval(interval);
      pause.textContent = '▶';
    } else {
      interval = setInterval(nextSlide, 1500);
      pause.textContent = '❚❚';
    }
    playing = !playing;
  }

  dots.forEach(dot => dot.addEventListener('click', e => goToSlide(+e.target.dataset.index)));
  prev.addEventListener('click', () => { prevSlide(); if (playing) clearInterval(interval); });
  next.addEventListener('click', () => { nextSlide(); if (playing) clearInterval(interval); });
  pause.addEventListener('click', pausePlay);

  interval = setInterval(nextSlide, 1500);
})();
