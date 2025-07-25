document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('backBtn').addEventListener('click', () => {
    window.history.back();
  });
  document.getElementById('confirmBtn').addEventListener('click', () => {
    alert('Xác nhận thanh toán thành công!');
  });
});
