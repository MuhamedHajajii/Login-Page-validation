let btnLogOut = document.getElementById("btnLogOut"); // Home
let welcomeText = document.getElementById("welcomeText"); // Home
let userNameLocal = [];
let userNameToHtml = [];

userNameLocal = JSON.parse(localStorage.getItem('users'))
console.log(userNameLocal);

function getUserName() {
  for ( let i = 0 ; i < userNameLocal.length ; i++) {
    userNameToHtml.push(userNameLocal[i].userName)
  }
  console.log(userNameToHtml);
}
getUserName();

welcomeText.innerHTML += userNameToHtml[localStorage.getItem('userNameIndex')];




btnLogOut.addEventListener('click',() => {
  localStorage.removeItem('userNameIndex')
  window.location.assign("./index.html")
});

