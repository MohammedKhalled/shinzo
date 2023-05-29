let logout = document.querySelector('#logout');
logout.addEventListener('click', function() {
  localStorage.removeItem('client');
  window.location.href = '../../index.html';
});

let acceptBtns = document.querySelectorAll('.accept');
let rejectBtns = document.querySelectorAll('.reject');

acceptBtns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.target.parentElement.innerHTML = '<div><i class="fa-solid fa-circle-check"></i> ACCEPTED</div>';
  });
});

rejectBtns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.target.parentElement.innerHTML = '<div class="rejected"><i class="fa-solid fa-circle-xmark"></i> REJECTED</div>';
  });
}
);
