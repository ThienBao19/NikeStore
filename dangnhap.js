document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const user = form.username.value.trim();
    const pass = form.password.value.trim();
    if (!user || !pass) {
      alert('Vui lòng nhập cả tên đăng nhập và mật khẩu.');
    } else {
      alert(`Đăng nhập thành công:\n  • Tên: ${user}`);
      form.reset();
    }
  });
});
