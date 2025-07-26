document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('backBtn').addEventListener('click', () => {
    window.history.back();
  });
  document.getElementById('checkoutBtn').addEventListener('click', () => {
    alert('Tiến hành thanh toán...');
    // bạn có thể chuyển trang: window.location.href='checkout.html';
  });
});
