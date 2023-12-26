let userNameSignUp = document.getElementById('userNameSignUp');
let userEmailSignINUp = document.getElementById('userEmailSignINUp');
let userPassWordSignINUp  = document.getElementById('userPassWordSignINUp');
let signUpBtn = document.getElementById('signUpBtn');
let dublicatedUserNAme = document.getElementById('dublicatedUserNAme');
let dublicatedmail = document.getElementById('dublicatedmail');
let wrongPassword = document.getElementById('wrongPassword');
let validitionEmpity = document.getElementById('validitionEmpity');
let wrongEmail = document.getElementById('wrongEmail')
let wrongUserName = document.getElementById('wrongUserName');
let successMessage = document.getElementById('successMessage');
let successMessageAfter = document.querySelector('#successAfter');
var regexPassWord = /^[\w\ .]{8,} {0,}$/
var regexmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var regexUsername = /^[\w\ .]{8,} {0,}$/
let userDAtaLocal = [];
let userNames = [];
let userEmails = [];
getUsersDataFromLocalStorage()

function getUsersDataFromLocalStorage() {
  if (localStorage.getItem('users') != null) {
    userDAtaLocal = JSON.parse(localStorage.getItem('users'))
    return true;
  }
}

// Start Regex Validition


function checkUserPassWord() {
  if (regexPassWord.test(userPassWordSignINUp.value)) {
  return true;
} else {
  return false;
}
}
function checkUserEmail() {
  if (regexmail.test(userEmailSignINUp.value)) {
    return true;
    } else {
      return false;
    }
}
function checkUseruserName() {
  if (regexUsername.test(userNameSignUp.value)) {
    return true;
    } else {
      return false;
    }
}

signUpBtn.addEventListener('click', () => {
  if (userNameSignUp.value.length != 0 
    && userEmailSignINUp.value.length != 0 
    && userPassWordSignINUp.value.length != 0) {
    if (checkUserEmail() == true 
    && checkUseruserName() == true) {
      checkUserPassWord()
  checkIfUserNameDulicated()
  checkIfUserEmailDulicated()
  if (userNames.indexOf(userNameSignUp.value) == -1 
  && userEmails.indexOf(userEmailSignINUp.value) == -1 
  && checkUserPassWord() == true) {
      sendUserDataToLocalStorage()
      showMessageSuccess()
  } else if (userNames.indexOf(userNameSignUp.value) != -1){
      showWhenDublicatedUserName()
      userNameSignUp.classList.remove('is-valid','validitionAnime')
      userEmailSignINUp.classList.remove('is-valid','validitionAnime')
      userPassWordSignINUp.classList.remove('is-valid','validitionAnime')
        successMessage.classList.add('d-none','validitionAnime')
        successMessageAfter.classList.add('d-none')

  } else if (userEmails.indexOf(userEmailSignINUp.value) != -1){
    showWhenDublicatedUserEmail()
    userNameSignUp.classList.remove('is-valid','validitionAnime')
    userEmailSignINUp.classList.remove('is-valid','validitionAnime')
    userPassWordSignINUp.classList.remove('is-valid','validitionAnime')
      successMessage.classList.add('d-none','validitionAnime')
      successMessageAfter.classList.add('d-none')
  } else if (checkUserPassWord() == false) {
    showWhenDublicatedUserPassWord()
    userNameSignUp.classList.remove('is-valid','validitionAnime')
    userEmailSignINUp.classList.remove('is-valid','validitionAnime')
    userPassWordSignINUp.classList.remove('is-valid','validitionAnime')
      successMessage.classList.add('d-none','validitionAnime')
      successMessageAfter.classList.add('d-none')
  }
  } else if (checkUserEmail() == false) {
    wrongEmailMessage()
  } else if (checkUseruserName() == false) {
    wrongUserNameCheck()
  }
}   else if ( userNameSignUp.value.length == 0 ) {
    validitionEmpity.classList.remove('d-none','validitionAnime')
    userNameSignUp.classList.add('is-invalid','validitionAnime')
  } else if ( userEmailSignINUp.value.length == 0  ) {
    validitionEmpity.classList.remove('d-none','validitionAnime')
    userEmailSignINUp.classList.add('is-invalid','validitionAnime')
  } else if ( userPassWordSignINUp.value.length == 0 ) {
    validitionEmpity.classList.remove('d-none','validitionAnime')
    userPassWordSignINUp.classList.add('is-invalid','validitionAnime')
  }
    
      
});



// validation Messages 
function wrongUserNameCheck() {
  wrongUserName.classList.remove('d-none','validitionAnime')
  userNameSignUp.classList.add('is-invalid','validitionAnime')
}
function wrongEmailMessage() {
  wrongEmail.classList.remove('d-none','validitionAnime');
  userEmailSignINUp.classList.add('is-invalid','validitionAnime')
}
function showWhenDublicatedUserName() {
  dublicatedUserNAme.classList.remove('d-none','validitionAnime');
  userNameSignUp.classList.add('is-invalid','validitionAnime')
}
function showWhenDublicatedUserEmail() {
  dublicatedmail.classList.remove('d-none','validitionAnime');
  userEmailSignINUp.classList.add('is-invalid','validitionAnime')
}
function showWhenDublicatedUserPassWord() {
  wrongPassword.classList.remove('d-none','validitionAnime');
  userPassWordSignINUp.classList.add('is-invalid','validitionAnime')
}
function showMessageSuccess() {
  successMessageAfter.classList.remove('d-none')
  successMessage.classList.remove('d-none','validitionAnime')
  userNameSignUp.classList.add('is-valid','validitionAnime')
  userEmailSignINUp.classList.add('is-valid','validitionAnime')
  userPassWordSignINUp.classList.add('is-valid','validitionAnime')
}

//remove Validition Message
userNameSignUp.addEventListener('input', () => {
  dublicatedUserNAme.classList.add('d-none','validitionAnime');
  validitionEmpity.classList.add('d-none','validitionAnime')
  wrongUserName.classList.add('d-none','validitionAnime')
    successMessage.classList.add('d-none','validitionAnime')
    successMessageAfter.classList.add('d-none')
    userNameSignUp.classList.remove('is-invalid','validitionAnime')
    userNameSignUp.classList.remove('is-valid','validitionAnime')
    userEmailSignINUp.classList.remove('is-valid','validitionAnime')
    userPassWordSignINUp.classList.remove('is-valid','validitionAnime')

});
userEmailSignINUp.addEventListener('input', () => {
    dublicatedmail.classList.add('d-none','validitionAnime');
    wrongEmail.classList.add('d-none','validitionAnime');
    validitionEmpity.classList.add('d-none','validitionAnime')
      successMessage.classList.add('d-none','validitionAnime')
      successMessageAfter.classList.add('d-none')
      userEmailSignINUp.classList.remove('is-invalid','validitionAnime')
      userNameSignUp.classList.remove('is-valid','validitionAnime')
      userEmailSignINUp.classList.remove('is-valid','validitionAnime')
      userPassWordSignINUp.classList.remove('is-valid','validitionAnime')
    });
userPassWordSignINUp.addEventListener('input', () => {
    wrongPassword.classList.add('d-none','validitionAnime');
    validitionEmpity.classList.add('d-none','validitionAnime')
      successMessage.classList.add('d-none','validitionAnime')
      successMessageAfter.classList.add('d-none')
      userPassWordSignINUp.classList.remove('is-invalid','validitionAnime')
      userNameSignUp.classList.remove('is-valid','validitionAnime')
      userEmailSignINUp.classList.remove('is-valid','validitionAnime')
      userPassWordSignINUp.classList.remove('is-valid','validitionAnime')
});

// Add User Data To LocalStorage when click on SignUp Button
function sendUserDataToLocalStorage() {
  let userData = {
    userName: userNameSignUp.value,
    userEmail: userEmailSignINUp.value,
    userPassWord:userPassWordSignINUp.value
  };
  userDAtaLocal.push(userData)
  localStorage.setItem('users',JSON.stringify(userDAtaLocal))
}
// Check If Dublicated UserNAme
function checkIfUserNameDulicated() {
  userNames = []
  for (var i = 0 ; i < userDAtaLocal.length ; i++ ) {
    userNames.push(userDAtaLocal[i].userName)
  }
}
// Check If Dublicated userEmails
function checkIfUserEmailDulicated() {
  userEmails = []
  for (var i = 0 ; i < userDAtaLocal.length ; i++ ) {
    userEmails.push(userDAtaLocal[i].userEmail)
  }
}


