let userEmail = document.getElementById("userEmail"); // signin
let userPassWord = document.getElementById("userPassWord"); // signin
let btnLogin = document.getElementById("btnLogin"); // signin
let validitionEmpity = document.getElementById("validitionEmpity");
let validitionincorrect = document.getElementById("validitionincorrect");
let loginCheck = [];
let logInEmailCheck = [];
let logInPassWordCheck = [];
// LogIn Button
btnLogin.addEventListener("click", () => {
  loginValidition();
  if (loginValidition() == true) {
  getEmails()
  getpassWrods()
  if (loginEmail() == loginPassWord()){
  window.location.assign("./home.html");
  validitionincorrect.classList.add('d-none');
  localStorage.setItem('userNameIndex',loginEmail())
  }else {
  validitionincorrect.classList.remove('d-none')
  }}
});

//Start Get Already Exist Emails And PassWords
if (localStorage.getItem('users') != null) {
  loginCheck = JSON.parse(localStorage.getItem('users'));
  getEmails()
  getpassWrods()
}
function getEmails() {
  for (let i = 0 ; i < loginCheck.length ; i++ ){
    logInEmailCheck.push(loginCheck[i].userEmail)
  }
}
function getpassWrods() {
  for (let i = 0 ; i < loginCheck.length ; i++ ){
    logInPassWordCheck.push(loginCheck[i].userPassWord)
  }
}
//End Get Already Exist Emails And PassWords

function loginEmail() {
  if (logInEmailCheck.indexOf(userEmail.value) != -1) {
    return logInEmailCheck.indexOf(userEmail.value);
  } else {
    return false;
  }
}

function loginPassWord() {
  if (logInPassWordCheck.indexOf(userPassWord.value != -1)) {
    return logInPassWordCheck.indexOf(userPassWord.value);
  } else {
    return false;
  }
}

// console.log(logInEmailCheck.indexOf('hajajii@gmail.com'));
// console.log(logInPassWordCheck.indexOf('123456dd'));


// Start validition if empety >> is-invalid is-valid
function loginValidition() {
  if (userEmail.value.length == 0 && userPassWord.value.length == 0) {
    validitionEmpity.classList.remove("d-none");
    userEmail.classList.add("is-invalid");
    userPassWord.classList.add("is-invalid");
    return false;
  } else if (userEmail.value.length == 0) {
    validitionEmpity.classList.remove("d-none");
    userEmail.classList.add("is-invalid");
    return false;
  } else if (userPassWord.value.length == 0) {
    validitionEmpity.classList.remove("d-none");
    userPassWord.classList.add("is-invalid");
    return false;
  } else {
    return true;
  }
}
userEmail.addEventListener("input", () => {
    validitionEmpity.classList.add("d-none");
    userEmail.classList.remove("is-invalid");
    validitionincorrect.classList.add('d-none')
});
userPassWord.addEventListener("input", () => {
    validitionEmpity.classList.add("d-none");
    userPassWord.classList.remove("is-invalid");
    validitionincorrect.classList.add('d-none')
});
// End validition if empety >> is-invalid is-valid
