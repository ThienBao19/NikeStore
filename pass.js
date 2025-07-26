document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resetForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const phone = form.phone.value.trim();
    const sms   = form.sms.value.trim();
    const pass  = form.newpass.value.trim();
    if (!phone || !sms || !pass) {
      alert('Vui lòng điền đầy đủ SĐT, mã SMS và mật khẩu mới.');
      return;
    }
    alert('Mật khẩu đã được thiết lập thành công!');
    form.reset();
  });
});
