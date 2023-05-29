let logout = document.querySelector('#logout');
logout.addEventListener('click', function() {
  localStorage.removeItem('client');
  window.location.href = '../../index.html';
});