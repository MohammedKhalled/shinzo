let logout = document.querySelector('#logout');
logout.addEventListener('click', function() {
  localStorage.removeItem('client');
  window.location.href = '../../index.html';
});

let acceptBtns = document.querySelectorAll('.solve');
let rejectBtns = document.querySelectorAll('.ignore');

acceptBtns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.target.parentElement.innerHTML = '<div><i class="fa-solid fa-circle-check"></i> SOLVED</div>';
  });
});

rejectBtns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.target.parentElement.innerHTML = '<div class="ignored"><i class="fa-solid fa-circle-xmark"></i> IGNORED</div>';
  });
}
);