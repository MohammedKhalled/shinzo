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


let internal = document.querySelector('#internal');
let domestic = document.querySelector('#domestic');
let international = document.querySelector('#international');

function handleRadioChange(){
  let beneficiaryBankInput = document.querySelector('#beneficiary-bank-input');
  let swiftCodeInput = document.querySelector('#swift-code-input');
  let ibanInput = document.querySelector('#iban-input');
  
  if(internal.checked){
    beneficiaryBankInput.style.display = 'none';
    swiftCodeInput.style.display = 'none';
    ibanInput.style.display = 'none';
  } else if(domestic.checked){
    beneficiaryBankInput.style.display = 'flex';
    swiftCodeInput.style.display = 'none';
    ibanInput.style.display = 'none';
  } else if(international.checked){
    beneficiaryBankInput.style.display = 'flex';
    swiftCodeInput.style.display = 'flex';
    ibanInput.style.display = 'flex';
  }

  document.querySelector('#success-msg').style.display = 'none';
  document.querySelector('#terms').style.display = 'block';
}

handleRadioChange();

internal.addEventListener('change', handleRadioChange);
domestic.addEventListener('change', handleRadioChange);
international.addEventListener('change', handleRadioChange);


let submit = document.querySelector('#submit');

submit.addEventListener('click', function(e){

  e.preventDefault(); 

  let inputs = document.querySelectorAll('.inputs input');
  console.log(inputs);
  let selects = document.querySelectorAll('select');
  flag = true;
  inputs.forEach(function(input){
    
    if(input.value === '' && input.parentElement.style.display !== 'none'){
      input.classList.add('input-error');
      flag = false;
    } else {
      input.classList.remove('input-error');
    }
  }
  );
  selects.forEach(function(select){
    if(select.value === ''){
      select.classList.add('input-error');
      flag = false;
    } else {
      select.classList.remove('input-error');
    }
  }
  );
  if(flag){
    document.querySelector('#success-msg').style.display = 'flex';
    document.querySelector('#terms').style.display = 'none';
  } 
  else{
    document.querySelector('#success-msg').style.display = 'none';
    document.querySelector('#terms').style.display = 'block';
  }

});

