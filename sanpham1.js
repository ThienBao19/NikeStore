document.addEventListener('DOMContentLoaded', () => {
  const thumbs      = Array.from(document.querySelectorAll('.gallery .thumb'));
  const mainImg     = document.getElementById('current-image');
  const prevBtn     = document.querySelector('.gallery .prev');
  const nextBtn     = document.querySelector('.gallery .next');
  let currentIdx    = thumbs.findIndex(t => t.classList.contains('active'));

  if (currentIdx < 0) currentIdx = 0;

  function showImage(idx) {
    // vòng quay
    if (idx < 0) idx = thumbs.length - 1;
    if (idx >= thumbs.length) idx = 0;
    currentIdx = idx;

    // cập nhật active class
    thumbs.forEach((t, i) => {
      t.classList.toggle('active', i === idx);
    });

    // đổi src ảnh chính
    const fullSrc = thumbs[idx].dataset.full;
    if (fullSrc) {
      mainImg.src = fullSrc;
    }
  }

  // click vào thumbnail
  thumbs.forEach((btn, i) => {
    btn.addEventListener('click', () => showImage(i));
  });

  // click prev
  prevBtn.addEventListener('click', () => {
    showImage(currentIdx - 1);
  });

  // click next
  nextBtn.addEventListener('click', () => {
    showImage(currentIdx + 1);
  });
});
