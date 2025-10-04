// script.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nama = document.getElementById('nama').value;
  const alertDiv = document.getElementById('alertMessage');
  
  alertDiv.className = 'alert alert-success';
  alertDiv.innerHTML = `<strong>Berhasil!</strong> Terima kasih, ${nama}! Tim kami akan segera menghubungi Anda.`;
  alertDiv.style.display = 'block';
  
  this.reset();
  
  setTimeout(() => {
    alertDiv.style.display = 'none';
  }, 5000);
});