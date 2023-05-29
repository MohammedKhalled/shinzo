let adminEmail = 'admin@shinzo.com'
let adminPassword = '123'
let bankerEmail = 'banker@shinzo.com'
let bankerPassword = '123'
let clientEmail = 'client@shinzo.com'
let clientPassword = '123'

let loginSubmit = document.getElementById('login-submit')


loginSubmit.onclick = (e) => {
  e.preventDefault()
  let loginEmail = document.querySelector('#login-email').value
  let loginPassword = document.querySelector('#login-password').value
  let client = document.querySelector('#client').checked
  let banker = document.querySelector('#banker').checked
  let admin = document.querySelector('#admin').checked
  let loginError = document.querySelector('#login-error')
  loginError.style.display = 'none'

  console.log(loginEmail, loginPassword)

  if(loginEmail === '' || !loginPassword === '' || (!client && !banker && !admin)){
    console.log('ala')
    loginError.style.display = 'block'
    return;
  }

  if(client){
    if(loginEmail == clientEmail && loginPassword == clientPassword){
      console.log('client logged in')
      let clientData = {
        email: loginEmail,
        password: loginPassword
      }
      localStorage.setItem('client', JSON.stringify(clientData)) ;
      window.location.href = '../../index.html'
    }
    else{
      loginError.innerHTML = 'Incorrect username or password'
      loginError.style.display = 'block'
    }
  } else if(banker){
    if(loginEmail == bankerEmail && loginPassword == bankerPassword){
      console.log('banker logged in')
      let clientData = {
        email: loginEmail,
        password: loginPassword
      }
      localStorage.setItem('client', JSON.stringify(clientData)) ;
      window.location.href = '../admin/admin.html'
    }
    else{
      loginError.innerHTML = 'Incorrect username or password'
      loginError.style.display = 'block'
    }
  } else if(admin){
    if(loginEmail == adminEmail && loginPassword == adminPassword){
      console.log('admin logged in')
      let clientData = {
        email: loginEmail,
        password: loginPassword
      }
      localStorage.setItem('client', JSON.stringify(clientData)) ;
      window.location.href = '../admin/admin.html'
    }
    else{
      loginError.innerText = 'Incorrect username or password'
      loginError.style.display = 'block'
    }
  }

} 
