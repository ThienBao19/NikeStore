document.addEventListener('DOMContentLoaded', () => {
  // Rotator pickup-bar
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

  // Sort‑By dropdown
  const sortBtn  = document.getElementById('sort-btn');
  const sortMenu = document.querySelector('.sort-menu');
  sortBtn.addEventListener('click', e => {
    e.stopPropagation();
    sortMenu.classList.toggle('visible');
  });
  document.addEventListener('click', () => {
    sortMenu.classList.remove('visible');
  });
});
