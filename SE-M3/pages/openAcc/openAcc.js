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


let submitRequest = document.querySelector('#submit-request');
let pending = document.querySelector('#pending');


submitRequest.addEventListener('click', function(e) {
  let inputs = document.querySelectorAll('input');
  let selects = document.querySelectorAll('select');
  let textarea = document.querySelector('textarea');

  e.preventDefault();

  flag = true;
  inputs.forEach(function(input) {
    if (input.value === '') {
      input.classList.add('input-error');
      flag = false;
    } else {
      input.classList.remove('input-error');
      flag = true;
    }
  }
  );
  selects.forEach(function(select) {
    if (select.value === '') {
      select.classList.add('input-error');
      flag = false;
    } else {
      select.classList.remove('input-error');
      flag = true;
    }
  }
  );
  if(textarea!==null){
  if (textarea.value === '') {
    textarea.classList.add('input-error');
    flag = false;
  } else {
    textarea.classList.remove('input-error');
    flag = true;
  }
  }
  
  if (flag) {
    pending.style.display = 'flex';
  }
  else {
    pending.style.display = 'none';
  }

});

let ok = document.querySelector('#ok');
ok.addEventListener('click', function() {
  pending.style.display = 'none';
}
);


let fileInput = document.querySelector('#national-id-photo');
let natIdLabel = document.querySelector('#label-for-natID');

fileInput.addEventListener('change', function() {
  natIdLabel.innerText = fileInput.files[0].name;
}
);