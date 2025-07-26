document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const u = form.username.value.trim();
    const p = form.password.value;
    const c = form.confirm.value;
    if (!u || !p || !c) {
      alert('Vui lòng nhập đầy đủ thông tin.');
      return;
    }
    if (p !== c) {
      alert('Mật khẩu và xác nhận mật khẩu không khớp.');
      return;
    }
    alert(`Chúc mừng ${u}, bạn đã đăng ký thành công!`);
    form.reset();
  });
});
