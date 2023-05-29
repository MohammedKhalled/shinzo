let signupForm = document.querySelector('#signup-form');
let overly = document.querySelector('#overly');
let success = document.querySelector('#success');
let submit = document.querySelector('#submit');
let error = document.querySelector('#error');

submit.onclick = (e) => {
  e.preventDefault();
  let fullname = document.querySelector('#full-name').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  let phone = document.querySelector('#phone').value;
  let gender = document.querySelector('#gender').value;
  let bankAccountYes = document.querySelector('#bank-account-yes').checked;
  let bankAccountNo = document.querySelector('#bank-account-no').checked;


  //check if any field is empty by if condition
  if(fullname === '' || email === '' || password === '' 
      || phone==='' || gender === '' || (!bankAccountNo && !bankAccountYes) ){
      error.style.display = 'block';
      return;
  }
  error.style.display = 'none';
  overly.style.display = 'flex';
}

overly.onclick = () => {
  overly.style.display = 'none';
}
success.onclick = (e) => { 
overly.style.display = 'flex';  ; 
}