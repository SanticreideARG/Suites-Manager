//El Login es la primer parte de la aplicacion.
//El usuario y la contraseña se daran definidos en las dos siguientes variables:

let userdefined = "admin";
let passwordefined = "admin";
//Y nuestro formulario verificara que estas coincidan con dichos valores, cerrando nuestra pantalla
//de logeo hasta la siguiente sesion mediante sessionStorage.

window.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("logged")) {
    loginWindow.classList.replace("login", "disabled");
  }});

const loginWindow = document.getElementById("login");
let loginform = document.getElementById("login");
loginform.addEventListener("submit", (e) => {
  e.preventDefault();
  let logindata = e.target.children;
  console.log(logindata);
  let user = logindata[2].value;
  let password = logindata[2].value;
  console.log(user);
  console.log(password);
  if (user === userdefined && password === passwordefined) {
    Toastify({
      text: "Login Exitoso",
      style: {
        background: "linear-gradient(to right, #132D46, #191E29)",
      },
    }).showToast();
    setTimeout(() => {
      loginWindow.classList.replace("login", "disabled");
      sessionStorage.setItem("logged", "logged");
      console.log(sessionStorage);
    }, 2000);
  }else if(user === "" || password === ""){
    Toastify({
      text: "Ingrese el Usuario y Contraseña",
      style: {
        background: "linear-gradient(to right, #4b5cc4, #fc7174)",
      },
    }).showToast();
  }
  else {
    Toastify({
      text: "Password o Usuario Incorrectos",
      style: {
        background: "linear-gradient(to right, #4b5cc4, #fc7174)",
      },
    }).showToast();
  }
});


//Los  Enlaces de los nav se mannejan dentro de la misma pagina por medio de clases y display
//que mostraran o no un div determinado.
//Divs:
const dashboardWindow = document.getElementById('dashboard');
const checkinWindow = document.getElementById('checkin');
const checkoutWindow = document.getElementById('checkout');
const historyWindow = document.getElementById('history');
//Enlaces:
const dashboardLink = document.getElementById('dashboardLink');
dashboardLink.addEventListener('click', () =>{
  dashboardWindow.classList.replace('disabled','dashboard');
  checkinWindow.classList.replace('checkin','disabled');
  checkoutWindow.classList.replace('checkout','disabled');
  historyWindow.classList.replace('history','disabled');
})

const checkinLink = document.getElementById('checkinLink');
checkinLink.addEventListener('click', () =>{
  dashboardWindow.classList.replace('dashboard','disabled');
  checkinWindow.classList.replace('disabled','checkin');
  checkoutWindow.classList.replace('checkout','disabled');
  historyWindow.classList.replace('history','disabled');
})
const checkoutLink = document.getElementById('checkoutLink');
checkoutLink.addEventListener('click', () =>{
  dashboardWindow.classList.replace('dashboard','disabled');
  checkinWindow.classList.replace('checkin','disabled');
  checkoutWindow.classList.replace('disabled','checkout');
  historyWindow.classList.replace('history','disabled');
})
const historyLink = document.getElementById('historyLink');
historyLink.addEventListener('click', () =>{
  dashboardWindow.classList.replace('dashboard','disabled');
  checkinWindow.classList.replace('checkin','disabled');
  checkoutWindow.classList.replace('checkout','disabled');
  historyWindow.classList.replace('disabled','history');})