let bars = document.querySelector('#bars');
let dropDown = document.querySelector('#drop-down');

let bell = document.querySelector('#bell');
let notifi = document.querySelector('#notifi');

bars.addEventListener('click', function() {
  notifi.classList.remove('show');
  dropDown.classList.toggle('show');
});

bell.addEventListener('click', function() {
  dropDown.classList.remove('show');
  notifi.classList.toggle('show');
});

let logout = document.querySelector('#logout');
logout.addEventListener('click', function() {
  localStorage.removeItem('client');
  window.location.href = '../../index.html';
  
});