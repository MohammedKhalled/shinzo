let services = document.querySelector('#services');
let service = document.querySelector('.service');
let leftIcon = document.querySelector('#left-icon');
let rightIcon = document.querySelector('#right-icon');

let actions = document.querySelector('#actions');
let getStartedBtn = document.querySelector('#get-started-btn');
let links = document.querySelector('#links');
let userLogged = document.querySelector('#user-logged');

if(localStorage.getItem('client')){
  actions.style.display = 'none';
  getStartedBtn.style.display = 'none';
  links.style.display = 'none';

} else{
  userLogged.style.display = 'none';
}


let servicesBtns = document.querySelectorAll('.service a');
servicesBtns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    if(!localStorage.getItem('client')){
      e.preventDefault();
      window.location.href = 'pages/entry/login.html';
    }
  });
});




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
  window.location.href = 'index.html';
});


rightIcon.addEventListener('click', function() {
  services.scrollTo({
    left: services.scrollLeft + service.offsetWidth + 20,
    behavior: 'smooth'
  });
});

leftIcon.addEventListener('click', function() {
  services.scrollTo({
    left: services.scrollLeft - service.offsetWidth - 20,
    behavior: 'smooth'
  });
});